<?php

session_start();

include "../Model/dbConnection.php";

if (isset($_POST["username"]) && isset($_POST["password"])) {
    $name = $_POST["username"];
    $pwd = $_POST["password"];

    $sql = $pdo->prepare("
     SELECT * FROM patient
      WHERE username = :name 
      ");
    $sql->bindValue(":name", $name);
    $sql->execute();
    $result = $sql->fetchAll(PDO::FETCH_ASSOC);

    echo "<pre>";
    print_r($result);

    if (password_verify($pwd, $result[0]['password'])) {
        $_SESSION["username"] = $name;
        header("Location: ../View/home.php");
    } else {
        header("Location: ../View/login.php");
    }
}
