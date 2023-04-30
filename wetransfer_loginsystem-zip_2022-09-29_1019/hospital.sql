-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 29, 2022 at 04:48 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospital`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `date` varchar(10) NOT NULL,
  `time` varchar(8) NOT NULL,
  `doctor` varchar(128) NOT NULL,
  `department` varchar(128) NOT NULL,
  `feeling` varchar(256) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_date` varchar(10) NOT NULL,
  `update_date` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `date`, `time`, `doctor`, `department`, `feeling`, `patient_id`, `status`, `created_date`, `update_date`) VALUES
(1, '2022-09-30', '17:05', 'Dr.Aung Aung', 'Heart', 'ill', 6, 1, '2022/09/27', '2022/09/29'),
(2, '2022-10-12', '07:07', 'Dr. John', 'lung', 'tired', 7, 0, '2022/09/27', NULL),
(3, '2022-10-07', '22:33', 'Dr. Kyaw Kyaw2', 'hand', 'ill', 7, 1, '2022/09/27', '2022/09/29'),
(4, '2022-09-28', '20:41', 'Dr. A', 'head', 'headache', 7, 0, '2022/09/27', NULL),
(5, '2022-10-14', '21:43', 'Dr.B', 'hand', 'pain', 6, 0, '2022/09/27', '2022/09/29'),
(6, '2022-09-28', '18:58', 'Dr. Aung Aung2', 'heart', 'ill', 6, 1, '2022/09/27', '2022/09/29');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(11) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `username`, `password`) VALUES
(6, 'Linn', '$2y$10$CRIiTjTlGNBm7Ra9qCk0YeGPqoOcLXpyarR6FFzXmUMoQKH6ELQQS'),
(7, 'Aung Aung', '$2y$10$P/9Zb698V87/scZd6F8Yi.aQ04kllgQwlHcu.0zU5gYI.P0yQOiRK');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
