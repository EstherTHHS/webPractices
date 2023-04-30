<?php

include "../Model/dbConnection.php";


$sql = $pdo->prepare("
        SELECT * FROM doctor
");

$sql->execute();

$doctorList = $sql->fetchAll(PDO::FETCH_ASSOC);
