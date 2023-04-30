<?php
session_start();

$bookingInfo = $_SESSION["bookinginfo"];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Booking</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</head>

<body>
    <div class="container">
        <form action="../Controller/booking/updateController.php" method="post">
            <h3 class="mb-5 text-center mt-3">Edit Booking</h3>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Date</label>
                <input type="date" name="date" class="form-control form-control-lg" placeholder="date" value="<?php echo $bookingInfo[0]["date"] ?>" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Time</label>
                <input type="time" name="time" class="form-control form-control-lg" placeholder="date" value="<?php echo $bookingInfo[0]["time"] ?>" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Doctor</label>
                <input type="text" name="doctor" class="form-control form-control-lg" placeholder="Doctor" value="<?php echo $bookingInfo[0]["doctor"] ?>" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Department</label>
                <input type="text" name="dep" class="form-control form-control-lg" placeholder="Department" value="<?php echo $bookingInfo[0]["department"] ?>" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Feeling</label>
                <input type="text" name="feeling" class="form-control form-control-lg" placeholder="feeling" value="<?php echo $bookingInfo[0]["feeling"] ?>" />
            </div>
            <input type="hidden" name="id" value="<?php echo $bookingInfo[0]["id"] ?>">
            <div class="form-outline mb-4">
                <label for="" class="form-label">Status</label>
                <select name="status" id="" class="form-control">
                    <option value="0"  <?php
                                        if ($bookingInfo[0]["status"] == 0) {
                                            echo  "selected";
                                        }
                                        ?>>Pending</option>
                    <option value="1" <?php
                                        if ($bookingInfo[0]["status"] == 1) {
                                            echo  "selected";
                                        }
                                        ?>>Approved</option>
                    <option value="2" <?php
                                        if ($bookingInfo[0]["status"] == 2) {
                                            echo  "selected";
                                        }
                                        ?>>Reject</option>
                </select>
            </div>
            <button class="btn btn-warning btn-lg btn-block" name="updateBooking" type="submit">Update Booking</button>


        </form>
    </div>
</body>

</html>