<?php

session_start();
include "../../Model/dbConnection.php";

if(isset($_GET["id"])){
     $bookingId = $_GET["id"];

    $sql = $pdo->prepare("SELECT * FROM booking WHERE id =:id");
    $sql->bindValue(":id",$bookingId);
    $sql->execute();
    $result = $sql->fetchAll(PDO::FETCH_ASSOC);
    //save session data $result 
    $_SESSION["bookinginfo"] = $result;

    header("Location: ../../View/edit.php");
}


?>