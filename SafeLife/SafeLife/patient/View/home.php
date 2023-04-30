<?php

session_start();

if (isset($_POST["username"]) && isset($_POST["password"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $_SESSION["username"] = $username;
}


if (!isset($_SESSION["username"])) {
    // go to login
    header("Location: ./login.php");
} else {
    $name = $_SESSION["username"];
}

include "../Controller/booking/listBookingController.php";

include "../Controller/phpqrcode/qrlib.php";

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-warning" href="#">Safe Life</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./booking.php">Booking</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Controller/profile/editController.php">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./forgetPassword.php">Forget password</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <a class="dropdown-item text-white" href="./login.php">Log Out</a>
                </form>
            </div>
        </div>
    </nav>

    <div class="container">
        <h4 class="text-end mt-1">Welcome
            <?php
            echo  $name;
            ?>

        </h4>

        <div class="display-5">
            Your Booking Record
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Department</th>
                    <th scope="col">Feeling</th>
                    <th scope="col">Status</th>
                    <th scope="col">Qrcode</th>
                </tr>
            </thead>
            <tbody>
                <?php $count = 1; ?>
                <?php foreach ($patientBookingList as $patient) {
                    if ($patient["status"] == 1) {
                        $text =  "Dr. Kyaw Kyaw 10:30 2022/10/03 ";
                        QRcode::png($text, "./Qrcodes/" . $patient["id"] . ".png");
                    }
                ?>
                    <tr>
                        <th scope="row"><?php echo $count++ ?></th>
                        <td><?= $patient["date"] ?></td>
                        <td><?= $patient["time"] ?></td>
                        <td><?= $patient["doctor_id"] ?></td>
                        <td><?= $patient["department"] ?></td>
                        <td><?= $patient["feeling"] ?></td>
                        <td><?php
                            if ($patient["status"] == 0)
                                echo  "Pending";
                            else if ($patient["status"] == 1)
                                echo  "Approved";
                            else
                                echo  "Reject";
                            ?></td>
                        <td>
                            <?php
                            if ($patient["status"] == 1) {
                            ?>
                                <img src="./Qrcodes/<?= $patient["id"] ?>.png" width="80" alt="">

                            <?php   } ?>
                        </td>
                    </tr>
                <?php } ?>

            </tbody>
        </table>
    </div>
</body>

</html>