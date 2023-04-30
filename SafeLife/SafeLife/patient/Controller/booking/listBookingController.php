<?php

include "../Model/dbConnection.php";


$name = $_SESSION["username"];
$sql = $pdo->prepare("SELECT id FROM patient WHERE username = :username");
$sql->bindValue(":username", $name);
$sql->execute();

$patientInfo = $sql->fetchAll(PDO::FETCH_ASSOC);
$patientID =  $patientInfo[0]['id'];

$sql = $pdo->prepare("SELECT * FROM booking WHERE patient_id = :patientID");
$sql->bindValue(":patientID", $patientID);
$sql->execute();
$patientBookingList = $sql->fetchAll(PDO::FETCH_ASSOC);

?>