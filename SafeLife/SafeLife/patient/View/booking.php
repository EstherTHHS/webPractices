<?php

include "../Controller/doctor/listController.php";

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

</head>

<body>
    <div class="container">
        <form action="../Controller/booking/addBookingController.php" method="post">
            <h3 class="mb-5 text-center mt-3">Booking</h3>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Date</label>
                <input type="date" name="date" class="form-control form-control-lg" placeholder="date" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Time</label>
                <input type="time" name="time" class="form-control form-control-lg" placeholder="date" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Doctor</label>
                <select name="doctor" class="form-control" id="">
                    <?php foreach ($doctorList as $key => $doctor) { ?>
                        <option value="<?= $doctor["id"] ?>">Dr.<?= $doctor["name"] ?></option>
                    <?php } ?>
                </select>
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Department</label>
                <input type="text" name="dep" class="form-control form-control-lg" placeholder="Department" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Feeling</label>
                <input type="text" name="feeling" class="form-control form-control-lg" placeholder="feeling" />
            </div>
            <button class="btn btn-success btn-lg btn-block" name="addBooking" type="submit">Booking</button>


        </form>
    </div>
</body>

</html>