CREATE DATABASE  IF NOT EXISTS `employeedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `employeedb`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: employeedb
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `employee` (
  `empid` bigint(20) NOT NULL AUTO_INCREMENT,
  `department` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`empid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;

INSERT INTO `employee` VALUES (1,"Ronald", "Allen", "Male","26 Nov 1984","DXEMP");
INSERT INTO `employee` VALUES (2,"Marie", "Jones", "Female","17 Jan 1983","INSADM");
INSERT INTO `employee` VALUES (3,"Nike", "Josef", "Male","19 oct 1984","DXANS");
INSERT INTO `employee` VALUES (4,"Michel", "Jackson", "Male","01 Feb 1983","INSADM");
INSERT INTO `employee` VALUES (5,"Rossie", "Eran", "Female","02 Feb 1983","ADM");
INSERT INTO `employee` VALUES (6,"Eagal", "Menon", "Female","12 Nov 1984","DX");
INSERT INTO `employee` VALUES (7,"Swager", "merr", "Male","30 Dec 1984","FSADM");
INSERT INTO `employee` VALUES (8,"Ronald", "Jackline", "Male","10 Apr 1984","MFGADM");
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'employeedb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;




SELECT * FROM employeedb.employee;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-22 22:46:07
