<?php

session_start();

include "../../Model/dbConnection.php";

$name = $_SESSION["username"];
$sql = $pdo->prepare("SELECT * FROM patient WHERE username = :username");
$sql->bindValue(":username", $name);
$sql->execute();

$patientInfo = $sql->fetchAll(PDO::FETCH_ASSOC);

$_SESSION["patientInfo"] = $patientInfo;

header("Location: ../../View/profile/updateProfile.php");

?>