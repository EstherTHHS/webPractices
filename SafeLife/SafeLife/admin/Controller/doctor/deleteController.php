<?php

include "../../Model/dbConnection.php";


if(isset($_GET["id"])){
    $id =  $_GET["id"];

    // $sql = $pdo->prepare("DELETE FROM doctor WHERE id = :id");
    // $sql->bindValue(":id",$id);
    // $sql->execute();

        $sql = $pdo->prepare(
            "UPDATE doctor SET
            del_flg = 1
            WHERE id = :id
        ");
        $sql->bindValue(":id",$id);
        $sql->execute();


    header("Location: ../../View/doctor/list.php");

}

?>