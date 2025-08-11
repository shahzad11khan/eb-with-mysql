-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2025 at 12:14 PM
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
(1, 'Full Stack', 'Shahzad khan', '2025-05-15 00:00:00', 'i m a full stack web developer and I am The Project Manager @EncoderBytes Pvt Ltd. ', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1747287300/hqgykd7thzv3lknemful.jpg', 'hqgykd7thzv3lknemful', '2025-05-15 10:35:01'),
(3, 'Task Manager', 'Muhammad Hanzala Dawood', '2025-07-21 15:50:00', 'Task Manager is a productivity-focused application designed to help users efficiently organize, track, and manage their daily tasks. It allows users to create, edit, prioritize, and categorize tasks with deadlines and reminders, ensuring nothing is overlooked. The intuitive interface supports drag-and-drop functionality, progress tracking, and real-time updates. Tasks can be marked as complete, archived, or edited anytime. Built with responsive design and cloud integration, it ensures accessibility across devices. Users can filter tasks by status, date, or priority, making planning effortless. Whether for personal use or team collaboration, Task Manager simplifies workflow, enhances time management, and boosts overall productivity', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1753095059/qz0fmmz9hlcivdlhrpqx.png', 'qz0fmmz9hlcivdlhrpqx', '2025-07-21 15:51:00');

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

--
-- Dumping data for table `getintouch`
--

INSERT INTO `getintouch` (`id`, `username`, `email`, `phone`, `message`, `created_at`) VALUES
(2, 'Isam Zia', 'isamzia091@gmail.com', '03131467259', 'Hi There. I am Isam Zia. I want you to make my Final Year Project', '2025-08-01 07:33:41');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `ProjectName` varchar(255) DEFAULT NULL,
  `ProjectCategory` varchar(255) DEFAULT NULL,
  `ProjectDescription` text DEFAULT NULL,
  `Image` text DEFAULT NULL,
  `publicId` varchar(255) DEFAULT NULL,
  `ProjectTeam` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`ProjectTeam`)),
  `ProjectTechnology` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`ProjectTechnology`)),
  `ProjectProblem` text DEFAULT NULL,
  `ProjectSolution` text DEFAULT NULL,
  `ProjectImpact` text DEFAULT NULL,
  `ProjectTimeline` text DEFAULT NULL,
  `ProjectProccess` text DEFAULT NULL,
  `LatestProject` text DEFAULT 0,
  `createdAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `ProjectName`, `ProjectCategory`, `ProjectDescription`, `Image`, `publicId`, `ProjectTeam`, `ProjectTechnology`, `ProjectProblem`, `ProjectSolution`, `ProjectImpact`, `ProjectTimeline`, `ProjectProccess`, `LatestProject`, `createdAt`) VALUES
(2, 'Smart-Health Connect', 'Web App', 'Smart Health-Connect is an innovative digital platform designed to bridge the gap between patients and healthcare providers through seamless communication and smart technology. The system enables users to book appointments, receive health alerts, and access personalized medical records from any device. With features like symptom checkers, doctor recommendations, and secure patient data management, it ensures a smooth healthcare experience. Built using modern web technologies, Smart Health-Connect aims to reduce clinic wait times, improve healthcare accessibility, and promote proactive patient engagement. It offers a user-friendly interface for both patients and professionals, making healthcare smarter, faster, and more connected than ever before.', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1752819777/y9pvuctzmap4ngep7nwt.png', 'y9pvuctzmap4ngep7nwt', '[\"Hanzala\",\"Shahzad\",\"Atif\",\"hasnain\"]', '[\"Next.js\"]', 'Smart Health-Connect is an innovative digital platform designed to bridge the gap between patients and healthcare providers through seamless communication and smart technology. The system enables users to book appointments, receive health alerts, and access personalized medical records from any device. With features like symptom checkers, doctor recommendations, and secure patient data management, it ensures a smooth healthcare experience. Built using modern web technologies, Smart Health-Connect aims to reduce clinic wait times, improve healthcare accessibility, and promote proactive patient engagement. It offers a user-friendly interface for both patients and professionals, making healthcare smarter, faster, and more connected than ever before.', 'In many healthcare systems, patients face long wait times, poor communication, and limited access to their medical records. Scheduling appointments is often manual and inefficient, leading to missed visits and patient dissatisfaction. Additionally, clinics struggle with organizing patient data and offering timely care recommendations. There is also a lack of smart tools that help patients understand symptoms before visiting a doctor. These challenges create a communication gap between patients and healthcare providers, resulting in delayed treatments and reduced care quality. The problem is not just medical—it’s technological. A smart, centralized solution is needed to streamline and modernize healthcare interactions. d', 'The development of Smart Health-Connect followed a structured and iterative process. It began with research and requirement analysis to understand user needs and healthcare workflow challenges. Wireframes and UI/UX prototypes were designed to ensure intuitive navigation. Frontend development was carried out using React and Tailwind CSS, while the backend used Node.js and Firebase for secure authentication, data handling, and real-time updates. A symptom checker and appointment system were integrated using APIs and custom logic. Rigorous testing ensured data security, responsiveness, and cross-platform compatibility. Continuous feedback from users and healthcare professionals guided improvements, resulting in a reliable, user-focused healthcare platform. d', '09-05-2025 - 11-07-2025', 'Smart Health-Connect offers a smart, centralized digital solution to modernize patient–doctor interactions. It allows users to book appointments online, access medical records securely, and receive real-time health notifications. A built-in symptom checker helps users identify possible conditions before visiting a doctor, while the system recommends specialists based on input. Healthcare providers benefit from organized patient data, easy scheduling, and automated communication tools. Built using modern web technologies, the platform ensures data privacy and a user-friendly experience across devices. By integrating these features into one seamless system, Smart Health-Connect enhances efficiency, reduces administrative burden, and improves the overall quality of care.', '1', '2025-07-18 11:23:00'),
(3, 'Task Manager', 'Ai', 'Task Manager is a productivity-focused application designed to help users efficiently organize, track, and manage their daily tasks. It allows users to create, edit, prioritize, and categorize tasks with deadlines and reminders, ensuring nothing is overlooked. The intuitive interface supports drag-and-drop functionality, progress tracking, and real-time updates. Tasks can be marked as complete, archived, or edited anytime. Built with responsive design and cloud integration, it ensures accessibility across devices. Users can filter tasks by status, date, or priority, making planning effortless. Whether for personal use or team collaboration, Task Manager simplifies workflow, enhances time management, and boosts overall productivity. d', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1752819977/yxrkm32yurrqpq5j1bf5.png', 'yxrkm32yurrqpq5j1bf5', '[\"Hanzala\",\"Atif\",\"Hasnain\"]', '[\"Python\",\"React.js\",\"Express.js\"]', 'In today’s fast-paced world, individuals and teams often struggle with staying organized, meeting deadlines, and managing workloads effectively. Traditional to-do lists lack flexibility, while scattered notes and manual tracking lead to missed tasks and reduced productivity. Collaboration becomes challenging without a centralized system to assign responsibilities, track progress, and manage time efficiently. Without real-time updates or reminders, users lose visibility into their priorities, leading to confusion and inefficiencies. These problems are amplified in remote or hybrid work environments. There is a clear need for a digital solution that streamlines task management, improves accountability, and enhances personal and team productivity. d', 'The Task Manager provides a smart, centralized platform to organize, track, and manage tasks efficiently. Users can create, edit, prioritize, and categorize tasks with due dates, reminders, and progress indicators. The system includes features like real-time updates, drag-and-drop reordering, and task filtering by status, date, or priority. For teams, it enables collaboration through task assignments, shared boards, and activity tracking. The application is responsive and accessible across devices, ensuring productivity on the go. With notifications and intuitive UI, it minimizes confusion and maximizes efficiency. The Task Manager replaces scattered tools with one reliable system, simplifying workflows and improving task completion rates.', 'The Task Manager has greatly enhanced productivity for individuals and teams by providing a centralized, easy-to-use platform for organizing tasks. Users report improved time management, fewer missed deadlines, and greater focus through task prioritization and reminders. Teams benefit from better collaboration, transparency, and accountability using shared boards and task assignments. The system reduces reliance on scattered notes and manual tracking, streamlining workflows and boosting efficiency. Its responsive design ensures accessibility anytime, anywhere, supporting remote and hybrid work environments. Overall, the Task Manager has empowered users to manage their responsibilities more effectively, resulting in higher productivity and improved task completion rates.', '05-07-2025 - In Progress', 'The development of the Task Manager followed a structured process, beginning with user research to identify key productivity challenges. Wireframes and prototypes were created to design a clean, intuitive user interface. The frontend was built using React and Tailwind CSS, ensuring responsiveness and usability. Backend functionality was implemented using Node.js and Firebase for secure data storage, real-time updates, and user authentication. Agile methodology guided the project, with iterative development, testing, and feedback cycles. Features like task creation, reminders, collaboration tools, and filtering were gradually integrated. Continuous testing ensured performance, scalability, and bug-free operation, resulting in a reliable and efficient task management solution.', '1', '2025-07-18 11:26:20');

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
(1, 'shahzad khan', 'shahzad@gmail.com', 'Full Stack With MySql', 'https://www.linkedin.com/in/shahzad-khan-78a7161a4/', 'https://github.com/shahzad11khan', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1747201138/hmpxxvx0ostoscx1kubr.jpg', 'hmpxxvx0ostoscx1kubr', '2025-05-14 05:38:58'),
(2, 'Muhammad Hanzala Dawood', 'muhammadhanzalahkhan1@gmail.com', 'Full Stack Developer', 'www.linkedin.com/in/mhk47', 'https://github.com/HanzalaKhattak', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1752820622/zf8kf0kllnq1yutsghzx.png', 'zf8kf0kllnq1yutsghzx', '2025-07-18 06:37:06');

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
(1, 'shahzad', 'shahzadkhan311666@gmail.com', '$2b$10$XARdZSQMd8FX5UNQ1ZSJZunUpQdC41fJwk.EP/K/aOljmQizuVLbK', 'shahzad', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1748325347/vqfr0zxsrbxi9oau9vlb.jpg', 'vqfr0zxsrbxi9oau9vlb', '2025-05-12 05:56:05'),
(5, 'Hanzala Khattak', 'muhammadhanzalahkhan1@gmail.com', '$2b$10$1Tc.fALS.owkS0ECo.qeXuE3bRvkvLKnZ6CEUlO1ctnhCQX/rk1vK', 'hanzala', 'https://res.cloudinary.com/dpj2ewekx/image/upload/v1753987268/z4nzjtjjxkv99iwwe7is.png', 'z4nzjtjjxkv99iwwe7is', '2025-07-31 11:43:46');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `getintouch`
--
ALTER TABLE `getintouch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `requestforjoining`
--
ALTER TABLE `requestforjoining`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vacancy`
--
ALTER TABLE `vacancy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
