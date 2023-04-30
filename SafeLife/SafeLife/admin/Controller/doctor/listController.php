<?php

include "../../Model/dbConnection.php";

$rowLimit = 1;
$page = (isset($_GET["page"])) ?  $_GET["page"] : 1;

$startPage = ($page-1)*$rowLimit;


$sql = $pdo->prepare("
        SELECT * FROM doctor WHERE del_flg = 0 LIMIT $startPage, $rowLimit
");
$sql->execute();

$doctorList = $sql->fetchAll(PDO::FETCH_ASSOC);


$sql = $pdo->prepare("
        SELECT COUNT(id) As total FROM doctor WHERE del_flg = 0 ORDER BY sama  
");
$sql->execute();
$totalRecord = $sql->fetchAll(PDO::FETCH_ASSOC)[0]['total'];

$totalPages = ceil($totalRecord/$rowLimit); 

