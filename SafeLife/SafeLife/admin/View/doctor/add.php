<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Doctor</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</head>

<body>
    <div class="container">
        <form action="../../Controller/doctor/addController.php" method="post">
            <h3 class="mb-5 text-center mt-3">Doctor Info</h3>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Name</label>
                <input type="text" name="name" class="form-control form-control-lg" placeholder="name" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Phone</label>
                <input type="text" name="phone" class="form-control form-control-lg" placeholder="phone" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Speciallist</label>
                <input type="text" name="special" class="form-control form-control-lg" placeholder="speciallist" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Duty Time</label>
                <input type="text" name="dutytime" class="form-control form-control-lg" placeholder="duty time" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Address</label>
                <input type="text" name="address" class="form-control form-control-lg" placeholder="address" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Department</label>
                <input type="text" name="dep" class="form-control form-control-lg" placeholder="department" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">SAMA.No</label>
                <input type="text" name="sama" class="form-control form-control-lg" placeholder="sama" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Gender</label>
                <input type="radio" name="gender" value="0" > Male
                <input type="radio" name="gender" value="1"> Female
                <input type="radio" name="gender" value="2"> Other
            </div>
            <button class="btn btn-success btn-lg btn-block" name="addDoctor" type="submit">Add Doctor</button>


        </form>
    </div>
</body>

</html>