<?php

include "../common/mailSender.php";

if(isset($_POST["contactus"])){
        $tomail = $_POST["tomail"];
        $subject = $_POST["subject"];
        $body = $_POST["body"];

    //mail send
    $mail = new SendMail();
    $mail->sendMail($tomail,$subject,$body);

    header("Location: ../../View/dashboard.php");
}
