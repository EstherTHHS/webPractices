<?php

include "../../Model/dbConnection.php";

if(isset($_POST["addDoctor"])){
    $name =  $_POST["name"];
    $phone =  $_POST["phone"];
    $special =  $_POST["special"];
    $dutyTime =  $_POST["dutytime"];
    $address =  $_POST["address"];
    $department =  $_POST["dep"];
    $sama =  $_POST["sama"];
    $gender =  $_POST["gender"];


    $sql = $pdo->prepare("
        INSERT INTO doctor
        (
        name,
        phone,
        special,
        dutyTime,
        address,
        department,
        sama,
        gender,
        created_date
        )
        VALUES
        (
        :name,
        :phone,
        :special,
        :dutyTime,
        :address,
        :department,
        :sama,
        :gender,
        :created_date
        )
    ");

    $sql->bindValue(":name",$name);
    $sql->bindValue(":phone", $phone);
    $sql->bindValue(":special", $special);
    $sql->bindValue(":dutyTime", $dutyTime);
    $sql->bindValue(":address", $address);
    $sql->bindValue(":department", $department);
    $sql->bindValue(":sama", $sama);
    $sql->bindValue(":gender", $gender);
    $sql->bindValue(":created_date", date("Y/m/d"));

    $sql->execute();

    header("Location: ../../View/doctor/list.php");

}else{
    echo "Error";
}




 

?>