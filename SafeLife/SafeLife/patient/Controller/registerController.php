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

    if (count($result) == 0) {
        $sql = $pdo->prepare("
            INSERT INTO patient (username,password) 
            VALUES (:name,:pwd)
      ");

        $sql->bindValue(":name", $name);
        $sql->bindValue(":pwd", password_hash($pwd,PASSWORD_DEFAULT));

        $sql->execute();

        $_SESSION["username"] = $name;
        header("Location: ../View/home.php");
    }else{
        echo "<script>
        alert('Already has username');
        </script>
        ";
    }
}
