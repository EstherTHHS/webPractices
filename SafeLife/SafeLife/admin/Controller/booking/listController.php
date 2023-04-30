<?php

include "../Model/dbConnection.php";


$sql = $pdo->prepare(
    "
            SELECT date,time,feeling,status,name,
            booking.department AS bdep,
            doctor.department AS ddep
            FROM booking
            INNER JOIN doctor
            ON booking.doctor_id = doctor.id"
);
$sql->execute();
$patientBookingList = $sql->fetchAll(PDO::FETCH_ASSOC);




$sql = $pdo->prepare("SELECT * FROM patient");
$sql->execute();
$pieChart = $sql->fetchAll(PDO::FETCH_ASSOC);


$ages = [];

foreach ($pieChart as $key => $value) {
    array_push($ages,$value["age"]);
}

//get total booking
$sql = $pdo->prepare("SELECT COUNT(id) AS TotalBooking FROM booking");
$sql->execute();
$totalBooking= $sql->fetchAll(PDO::FETCH_ASSOC);

//get total booking
$sql = $pdo->prepare("SELECT SUM(amount) AS TotalAmount FROM booking");
$sql->execute();
$income= $sql->fetchAll(PDO::FETCH_ASSOC);

//get total booking
$sql = $pdo->prepare("SELECT Min(amount) AS MinAmount FROM booking");
$sql->execute();
$minIncome = $sql->fetchAll(PDO::FETCH_ASSOC);

//get total booking
$sql = $pdo->prepare("SELECT Max(amount) AS MaxAmount FROM booking");
$sql->execute();
$maxIncome = $sql->fetchAll(PDO::FETCH_ASSOC);



//get total doctor
$sql = $pdo->prepare("SELECT COUNT(id) AS TotalDoctor FROM doctor");
$sql->execute();
$totalDoctor = $sql->fetchAll(PDO::FETCH_ASSOC);

//get total patient
$sql = $pdo->prepare("SELECT COUNT(id) AS TotalPatient FROM patient");
$sql->execute();
$totalPatient = $sql->fetchAll(PDO::FETCH_ASSOC);






?>