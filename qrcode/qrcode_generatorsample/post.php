<?php
if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $address1 = $_POST['address1'];
    $address2 = $_POST['address2'];
    $city = $_POST['city'];
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h1 class="form-control">Email:<?= $email ?> </h1>
    <h1 class="form-control">Address1:<?= $address1 ?> </h1>
    <h1 class="form-control">Address2:<?= $address2 ?> </h1>
    <h1 class="form-control">City:<?= $city ?> </h1>

    <div class="col-4 qr-code ms-5">
        <img src="" alt="qr-code" />
    </div>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js"></script>
    <script src="./jquery-3.6.0.min.js"></script>
    <!-- <script src="./script.js"></script> -->
    <script>
        console.log(document.getElementsByClassName("form-control").length);
        let qrImg = document.querySelector(".qr-code img");



        function displayBTN() {
            // e.preventDefault();
            let getInput = "";
            for (let index = 0; index < document.getElementsByClassName("form-control").length; index++) {
                getInput += document.getElementsByClassName("form-control")[index].innerHTML + '\n';

            }


            let preValue;
            if (!getInput || preValue === getInput) return;
            preValue = getInput;
            qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${getInput}`;

        }

        displayBTN();


        function downloadURI(uri, name) {
            var link = document.createElement("a");
            link.download = name;
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            delete link;
        };


        setTimeout(() => {
            downloadURI(qrImg.src, 'qrcode.svg');
        }, 6000);
    </script>
</body>

</html>