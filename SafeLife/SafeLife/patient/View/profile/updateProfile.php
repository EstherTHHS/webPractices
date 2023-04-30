<?php

session_start();

$patientInfo = $_SESSION["patientInfo"];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="../js/uploadProfile.js" defer></script>
</head>

<body>
    <div class="container">
        <form action="../../Controller/profile/updateController.php" method="post" enctype="multipart/form-data">
            <h3 class="mb-5 text-center mt-3">Your Profile</h3>


            <img src=" ../../storage/<?= $patientInfo[0]["profile"] ?>" id="image" alt="" class="rounded mx-auto d-block" alt="..." width=" 200" style="border-radius:50% !important">
            <input type="file" onchange="setImage()" name="uploadFile" id="uploadFile">

            <div class="form-outline mb-4">
                <label for="" class="form-label">Name</label>
                <input type="text" name="name" class="form-control form-control-lg" value="<?= $patientInfo[0]["username"] ?>" placeholder="name" disabled />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Age</label>
                <input type="number" name="age" class="form-control form-control-lg" value="<?= $patientInfo[0]["age"] ?>" placeholder="age" />
            </div>

            <div class="form-outline mb-4">
                <label for="" class="form-label">Email</label>
                <input type="email" name="email" class="form-control form-control-lg" value="<?= $patientInfo[0]["email"] ?>" placeholder="Email" />
            </div>
            <input type="hidden" name="id" value="<?= $patientInfo[0]["id"] ?>">
            <button class="btn btn-success btn-lg btn-block" name="updateProfile" type="submit">Update Profile</button>


        </form>
    </div>
</body>

</html>