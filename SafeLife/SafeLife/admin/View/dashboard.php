<?php
include "../Controller/booking/listController.php";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/dashboard.css?v=" <?= time() ?>>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="./js/jquery3.6.0.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
    <script src="./js/dashboard.js?v=" <?= time() ?> defer></script>
</head>

<body>
    <div class="container">
        <!--Main Navigation-->
        <header>
            <!-- Sidebar -->
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                <div class="position-sticky">
                    <div class="list-group list-group-flush mx-3 mt-4">
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                        </a>
                        <a href="./doctor/list.php" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Doctor Manage</span>
                        </a>
                    </div>
                </div>
            </nav>
            <!-- Sidebar -->

            <!-- Navbar -->
            <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <!-- Container wrapper -->
                <div class="container-fluid">
                    <!-- Toggle button -->
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <!-- Brand -->
                    <a class="navbar-brand" href="#">
                        <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="25" alt="MDB Logo" loading="lazy" />
                    </a>
                </div>
                <!-- Container wrapper -->
            </nav>
            <!-- Navbar -->
        </header>
        <!--Main Navigation-->

        <!--Main layout-->
        <main style="margin-top: 58px;">
            <div>
                <canvas id="myChart"></canvas>
            </div>
            <div class="row text-center mt-2">
                <div class="col-3 p-3 bg-primary text-white m-1">Booking : <?= $totalBooking[0]["TotalBooking"] ?> </div>
                <div class="col-3 p-3 bg-success m-1">Doctor : <?= $totalDoctor[0]["TotalDoctor"] ?> </div>
                <div class="col-3 p-3 bg-info m-1">Patient : <?= $totalPatient[0]["TotalPatient"] ?> </div>
                <div class="col-3 p-3 bg-info m-1">Total Income : <?= number_format($income[0]["TotalAmount"]) ?> </div>
                <div class="col-3 p-3 bg-info m-1">Min Income : <?= number_format($minIncome[0]["MinAmount"]) ?> </div>
                <div class="col-3 p-3 bg-info m-1">Max Income : <?= number_format($maxIncome[0]["MaxAmount"]) ?> </div>
            </div>
            <button class="btn btn-primary" id="downloadPdf">Download All</button>
            <div class="container pt-4">
                <table class="table" id="booking">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Department</th>
                            <th scope="col">Feeling</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $count = 1; ?>
                        <?php foreach ($patientBookingList as $patient) { ?>
                            <tr>
                                <th scope="row"><?php echo $count++ ?></th>
                                <td><?= $patient["date"] ?></td>
                                <td><?= $patient["time"] ?></td>
                                <td><?= $patient["name"] ?></td>
                                <td><?=$patient["ddep"]?></td>
                                <td><?= $patient["feeling"] ?></td>
                                <td><?php
                                    if ($patient["status"] == 0)
                                        echo  "Pending";
                                    else if ($patient["status"] == 1)
                                        echo  "Approved";
                                    else
                                        echo  "Reject";
                                    ?></td>
                                <td></td>
                            </tr>
                        <?php } ?>

                    </tbody>
                </table>
            </div>
        </main>
        <!--Main layout-->
    </div>

    <script>
        let ages = <?= json_encode($ages) ?>;
        let pieData = [0, 0, 0, 0];

        for (let index = 0; index < ages.length; index++) {
            if (ages[index] < 18) {
                pieData[0] += 1;
            } else if (ages[index] >= 65) {
                pieData[2] += 1;
            } else if (ages[index] > 18) {
                pieData[1] += 1;
            } else {
                pieData[3] += 1;
            }
        }
    </script>
</body>

</html>