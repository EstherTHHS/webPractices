<?php

include "../../Model/dbConnection.php";


if(isset($_POST["searchText"])){
    $search = $_POST["searchText"];

    if($_POST["searchType"] == "name"){
        $sql = $pdo->prepare("SELECT * FROM doctor WHERE name LIKE :name");
        $sql->bindValue(":name", "%" . $search . "%");
    }else{
        $sql = $pdo->prepare("SELECT * FROM doctor WHERE phone LIKE :phone");
        $sql->bindValue(":phone", "%" . $search . "%");
    }

    $sql->execute();

   
    $doctorList = $sql->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($doctorList);
  
}
