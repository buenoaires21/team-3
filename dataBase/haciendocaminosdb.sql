-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-04-2021 a las 22:00:16
-- Versión del servidor: 8.0.21
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `haciendocaminosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bills`
--

DROP TABLE IF EXISTS `bills`;
CREATE TABLE IF NOT EXISTS `bills` (
  `billId` int NOT NULL AUTO_INCREMENT,
  `number` int DEFAULT NULL,
  `paymentDate` date DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `projectId` int DEFAULT NULL,
  PRIMARY KEY (`billId`),
  UNIQUE KEY `billId` (`billId`),
  KEY `projectId` (`projectId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employeeprojects`
--

DROP TABLE IF EXISTS `employeeprojects`;
CREATE TABLE IF NOT EXISTS `employeeprojects` (
  `employeeId` int DEFAULT NULL,
  `projectId` int DEFAULT NULL,
  KEY `employeeId` (`employeeId`),
  KEY `projectId` (`projectId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `employeeId` int NOT NULL AUTO_INCREMENT,
  `dni` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `cuil` varchar(50) DEFAULT NULL,
  `cbu` varchar(50) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `adress` varchar(50) DEFAULT NULL,
  `telephone` int DEFAULT NULL,
  `educations` text,
  `workExperience` text,
  `bankName` varchar(50) DEFAULT NULL,
  `bankAccountType` varchar(50) DEFAULT NULL,
  `roleId` int NOT NULL,
  `score` int DEFAULT NULL,
  `regionalId` int DEFAULT NULL,
  PRIMARY KEY (`employeeId`),
  UNIQUE KEY `employeeId` (`employeeId`),
  KEY `roleId` (`roleId`),
  KEY `regionalId` (`regionalId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects`
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `projectId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `startDate` date DEFAULT NULL,
  `finishDate` date DEFAULT NULL,
  `regionalId` int DEFAULT NULL,
  PRIMARY KEY (`projectId`),
  UNIQUE KEY `projectId` (`projectId`),
  KEY `regionalId` (`regionalId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regionals`
--

DROP TABLE IF EXISTS `regionals`;
CREATE TABLE IF NOT EXISTS `regionals` (
  `regionalId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `province` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `adress` varchar(50) DEFAULT NULL,
  `zipCode` int DEFAULT NULL,
  PRIMARY KEY (`regionalId`),
  UNIQUE KEY `regionalId` (`regionalId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `roleId` int NOT NULL AUTO_INCREMENT,
  `roleName` varchar(50) NOT NULL,
  PRIMARY KEY (`roleId`),
  UNIQUE KEY `roleId` (`roleId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `schedules`
--

DROP TABLE IF EXISTS `schedules`;
CREATE TABLE IF NOT EXISTS `schedules` (
  `scheduleId` int NOT NULL AUTO_INCREMENT,
  `wasPresent` tinyint(1) DEFAULT NULL,
  `employeeId` int DEFAULT NULL,
  `workDate` date DEFAULT NULL,
  PRIMARY KEY (`scheduleId`),
  UNIQUE KEY `scheduleId` (`scheduleId`),
  KEY `employeeId` (`employeeId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `taskId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(140) DEFAULT NULL,
  `hasBeenDone` tinyint(1) DEFAULT NULL,
  `projectId` int DEFAULT NULL,
  PRIMARY KEY (`taskId`),
  UNIQUE KEY `taskId` (`taskId`),
  KEY `projectId` (`projectId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `userName` varchar(50) NOT NULL,
  `userPassword` varchar(50) NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`userName`),
  UNIQUE KEY `userName` (`userName`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
