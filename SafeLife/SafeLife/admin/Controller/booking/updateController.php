<?php

session_start();

include "../../Model/dbConnection.php";
include "../common/commonFunction.php";
include "../common/mailSender.php";


if (isset($_POST["updateBooking"])) {

    $date = $_POST["date"];
    $time = $_POST["time"];
    $doctor = $_POST["doctor"];
    $dep = $_POST["dep"];
    $feeling = $_POST["feeling"];
    $id = $_POST["id"];
    $status = $_POST["status"];

    //get patient ID
    $sql = $pdo->prepare("SELECT patient_id FROM booking WHERE id =:bookingID");
    $sql->bindValue(":bookingID", $id);
    $sql->execute();
    $patientIDInfo = $sql->fetchAll(PDO::FETCH_ASSOC);
    $patientID = $patientIDInfo[0]["patient_id"];

    // get mail
    $sql = $pdo->prepare("SELECT email FROM patient WHERE id =:patientID");
    $sql->bindValue(":patientID", $patientID);
    $sql->execute();
    $patientinfo = $sql->fetchAll(PDO::FETCH_ASSOC);
    $mailAddress = $patientinfo[0]["email"];

    //check qrcode or not
    if ($status == 1) {
        $qrcode = getQrcode();
        //mail send
        $mail = new SendMail();
        $mail->sendMail(
            $mailAddress,
            "Booking Status",
            "<h2>Your Booking Status</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque necessitatibus corporis reprehenderit
            quas beatae unde iste perspiciatis est illo voluptatum veritatis animi omnis suscipit facere at, quos ad
            tempora.</p>
        <b>From Safe Life Co., Ltd</b>"
        );
    } else {
        $qrcode = null;
    }

    echo $qrcode;

    $sql = $pdo->prepare(
        "UPDATE booking SET 
            date=:date,
            time=:time,
            doctor=:doctor,
            department=:dep,
            feeling=:feeling,
            status=:status,
            qrcode = :qrcode,
            update_date=:updateDate
        WHERE id=:id"
    );

    $sql->bindValue(":date", $date);
    $sql->bindValue(":time", $time);
    $sql->bindValue(":doctor", $doctor);
    $sql->bindValue(":dep", $dep);
    $sql->bindValue(":feeling", $feeling);
    $sql->bindValue(":qrcode", $qrcode);
    $sql->bindValue(":status", $status);
    $sql->bindValue(":updateDate", date("Y/m/d"));
    $sql->bindValue(":id", $id);

    $sql->execute();

    header("Location: ../../View/dashboard.php");
} else {
    header("Location: ../View/login.php");
}
