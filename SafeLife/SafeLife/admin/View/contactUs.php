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
        <form action="../Controller/booking/contactUsController.php" method="post">
            <h3 class="mb-5 text-center mt-3">Mail Sender</h3>
            <div class="form-outline mb-4">
                <label for="" class="form-label">To</label>
                <input type="text" name="tomail" class="form-control form-control-lg" placeholder="emailAddress" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Subject</label>
                <input type="text" name="subject" class="form-control form-control-lg" placeholder="subject" />
            </div>
            <div class="form-outline mb-4">
                <label for="" class="form-label">Body</label>
                <textarea class="form-control" name="body" placeholder="body" cols="30" rows="10"></textarea>
            </div>

    <button class="btn btn-warning btn-lg btn-block" name="contactus" type="submit">Send Mail
    </button>


    </form>
    </div>
</body>

</html>