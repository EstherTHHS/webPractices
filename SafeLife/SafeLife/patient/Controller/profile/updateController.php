<?php

include "../../Model/dbConnection.php";

if(isset($_POST["updateProfile"])){
    // get patinet Info
    $age = $_POST["age"];
    $email = $_POST["email"];
    $id = $_POST["id"];


    //get image Info
    if($_FILES["uploadFile"]["name"] == ""){
        // file not exist
       $sql = $pdo->prepare(
        "UPDATE patient SET 
            age = :age,
            email = :email
            WHERE id = :id
       ");
    }else{
        $file = $_FILES['uploadFile']['name'];
        $location = $_FILES['uploadFile']['tmp_name'];
        $extension = pathinfo($file)['extension'];
        $path = $id . "." . $extension;
        
        if (move_uploaded_file($location, "../../storage/". $id.".". $extension)) {
            $sql = $pdo->prepare(
                "UPDATE patient SET 
                age = :age,
                email = :email,
                profile = :profile
                WHERE id = :id
                "
            );
            $sql->bindValue(":profile", $path);
        } else {
            echo 'There was some error moving the file to upload directory.';
        }
    }
    $sql->bindValue(":age", $age);
    $sql->bindValue(":email", $email);
    $sql->bindValue(":id", $id);
    $sql->execute();
    header("Location: ../../View/home.php");
}
