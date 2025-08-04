-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2025 at 07:01 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `encoderbytes`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `blogtitle` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `publicId` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `blogtitle`, `author`, `datetime`, `description`, `image`, `publicId`, `createdAt`) VALUES
(1, 'Full Stack', 'Shahzad khan', '2025-05-15 00:00:00', 'i m a full stack web developer. ', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1747287300/hqgykd7thzv3lknemful.jpg', 'hqgykd7thzv3lknemful', '2025-05-15 10:35:01');

-- --------------------------------------------------------

--
-- Table structure for table `getintouch`
--

CREATE TABLE `getintouch` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE project (
  id int(11) NOT NULL,
  ProjectName varchar(255) DEFAULT NULL,
  ProjectCategory varchar(255) DEFAULT NULL,
  ProjectDescription text DEFAULT NULL,
  Image text DEFAULT NULL,
  publicId varchar(255) DEFAULT NULL,
  ProjectTeam JSON DEFAULT NULL,
  ProjectTechnology JSON DEFAULT NULL,
  ProjectProblem text DEFAULT NULL,
  ProjectSolution text DEFAULT NULL,
  ProjectImpact text DEFAULT NULL,
  ProjectTimeline text DEFAULT NULL,
  ProjectProccess text DEFAULT NULL,
  LatestProject text DEFAULT FALSE,
  createdAt datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `ProjectName`, `ProjectCategory`, `ProjectDescription`, `Image`, `publicId`, `createdAt`) VALUES
(1, 'Vapi', 'AI', 'Talk to speech and Speech to text project  ', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1747202984/ku7fy7azg6ulwwl1womr.png', 'ku7fy7azg6ulwwl1womr', '2025-05-14 11:09:44');

-- --------------------------------------------------------

--
-- Table structure for table `requestforjoining`
--

CREATE TABLE `requestforjoining` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `experience` varchar(100) DEFAULT NULL,
  `expected_salary` varchar(50) DEFAULT NULL,
  `file_cv` varchar(255) DEFAULT NULL,
  `public_id` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `LinkedIn` text DEFAULT NULL,
  `Github` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `publicId` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `username`, `email`, `designation`, `LinkedIn`, `Github`, `image`, `publicId`, `created_at`) VALUES
(1, 'shahzad khan', 'shahzad@gmail.com', 'Full Stack With MySql', 'https://www.linkedin.com/in/shahzad-khan-78a7161a4/', 'https://github.com/shahzad11khan', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1747201138/hmpxxvx0ostoscx1kubr.jpg', 'hmpxxvx0ostoscx1kubr', '2025-05-14 05:38:58');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirmpassword` varchar(255) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `publicId` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `confirmpassword`, `image`, `publicId`, `created_at`) VALUES
(1, 'shahzad', 'shahzadkhan311666@gmail.com', '$2b$10$XARdZSQMd8FX5UNQ1ZSJZunUpQdC41fJwk.EP/K/aOljmQizuVLbK', 'shahzad', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1748325347/vqfr0zxsrbxi9oau9vlb.jpg', 'vqfr0zxsrbxi9oau9vlb', '2025-05-12 05:56:05');

-- --------------------------------------------------------

--
-- Table structure for table `vacancy`
--

CREATE TABLE `vacancy` (
  `id` int(11) NOT NULL,
  `VacancyTitle` varchar(255) NOT NULL,
  `Requireds` text NOT NULL,
  `Experience` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacancy`
--

INSERT INTO `vacancy` (`id`, `VacancyTitle`, `Requireds`, `Experience`, `created_at`, `updated_at`) VALUES
(1, 'UI/UX', 'We are hiring the UIUX designer with the experience of 1.5 years at industry level.', '1.5', '2025-05-15 05:50:15', '2025-05-15 05:50:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blogtitle` (`blogtitle`);

--
-- Indexes for table `getintouch`
--
ALTER TABLE `getintouch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `requestforjoining`
--
ALTER TABLE `requestforjoining`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `vacancy`
--
ALTER TABLE `vacancy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `getintouch`
--
ALTER TABLE `getintouch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `requestforjoining`
--
ALTER TABLE `requestforjoining`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vacancy`
--
ALTER TABLE `vacancy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
