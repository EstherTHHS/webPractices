<?php
include "../../Controller/doctor/listController.php";
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
    <link rel="stylesheet" href="../css/dashboard.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="../js/jquery3.6.0.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
    <script src="../js/doctor.js?v=" <?= time() ?> defer></script>
</head>

<body>
    <div class="container">
        <!--Main Navigation-->
        <header>
            <!-- Sidebar -->
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                <div class="position-sticky">
                    <div class="list-group list-group-flush mx-3 mt-4">
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
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
            <a href="./add.php">
                <button class="btn btn-success mt-3">Add Doctor</button>
            </a>

            <div class="row mt-5">
                <div class="col-6">
                    <input type="text" class="form-control" id="searchText" placeholder="doctor name">
                    <input type="radio" name="category" id="searchName" value="name" checked> Name
                    <input type="radio" name="category" id="searchPhone" value="phone"> Phone
                </div>

                <div class="col-3">
                    <button class="btn btn-primary" id="search">Search</button>
                </div>
            </div>



            <table class="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Speciallist</th>
                        <th scope="col">Duty Time</th>
                        <th scope="col">SAMA.No</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                        <th scope="col">Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="searchResult">
                    <?php $count = ($page*$rowLimit)- ($rowLimit-1); ?>
                    <?php foreach ($doctorList as $key => $doctor) { ?>
                        <tr>
                            <td><?= $count++; ?>.</td>
                            <td>Dr.<?= $doctor["name"] ?></td>
                            <td><?= $doctor["phone"] ?></td>
                            <td><?= $doctor["special"] ?></td>
                            <td><?= $doctor["dutytime"] ?></td>
                            <td><?= $doctor["sama"] ?></td>
                            <td><?php
                                if ($doctor["gender"] == 0) {
                                    echo "Male";
                                } elseif ($doctor["gender"] == 1) {
                                    echo "Female";
                                } else {
                                    echo "Not Set";
                                }

                                ?></td>
                            <td><?= $doctor["address"] ?></td>
                            <td><?= $doctor["department"] ?></td>
                            <td> <a href="../../Controller/doctor/deleteController.php?id=<?= $doctor["id"] ?>" class="text-danger">Delete</a> </td>

                        </tr>
                    <?php }  ?>


                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item 
                    <?php if ($page <= 1) {
                        echo "disabled";
                    }  ?>
                    ">
                        <a class="page-link" href="?page=<?= $page - 1 ?>" aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                        </a>
                    </li>

                    <?php for ($i = 1; $i <= $totalPages; $i++) { ?>
                        <li class="page-item 
                        <?php 
                            if($page == $i){
                                echo "active";
                            }
                        ?>
                        "><a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a></li>
                    <?php } ?>


                    <li class="page-item 
                     <?php if ($page >= $totalPages) {
                            echo "disabled";
                        }  ?>">
                        <a class="page-link" href="?page=<?= $page + 1 ?>" aria-label="Next">
                            <span aria-hidden="true">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </main>
        <!--Main layout-->
    </div>


</body>

</html>