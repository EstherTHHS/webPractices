<?php

session_start();

include "../../Model/dbConnection.php";

if(isset($_POST["addBooking"])){
 
    $date = $_POST["date"];
    $time = $_POST["time"];
    $doctor = $_POST["doctor"];
    $dep = $_POST["dep"];
    $feeling = $_POST["feeling"];


    $name = $_SESSION["username"];
    $sql= $pdo->prepare("SELECT id FROM patient WHERE username = :username");
    $sql->bindValue(":username",$name);
    $sql->execute();

    $patientInfo = $sql->fetchAll(PDO::FETCH_ASSOC);
    $patientID =  $patientInfo[0]['id'];

    $sql = $pdo->prepare(
        "INSERT INTO booking 
        (
            date,
            time,
            doctor_id,
            department,
            feeling,
            patient_id,
            status,
            created_date
        ) 
        VALUES 
        (
            :date,
            :time,
            :doctor,
            :department,
            :feeling,
            :patientID,
            :status,
            :createDate
        )"
    );

    $sql->bindValue(":date",$date);
    $sql->bindValue(":time", $time);
    $sql->bindValue(":doctor", $doctor);
    $sql->bindValue(":department", $dep);
    $sql->bindValue(":feeling", $feeling);
    $sql->bindValue(":patientID", $patientID);
    $sql->bindValue(":status", 0);
    $sql->bindValue(":createDate", date("Y/m/d"));

    $sql->execute();

    header("Location: ../../View/home.php");

}else{
    header("Location: ../View/login.php");
}


?>