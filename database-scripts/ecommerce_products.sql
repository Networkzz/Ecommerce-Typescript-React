-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(5,0) NOT NULL,
  `image` blob,
  `stock` int NOT NULL,
  `createdAt` varchar(100) DEFAULT NULL,
  `updatedAt` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Raton logitech','Best mouse in the market',123,NULL,5,'2022-03-07 12:55:15','2022-03-07 12:55:15'),(2,'Raton logitech','Best mouse in the market',123,NULL,5,'2022-03-07 12:55:20','2022-03-07 12:55:20'),(3,'Raton logitech','Best mouse in the market',123,NULL,5,'2022-03-07 12:55:20','2022-03-07 12:55:20'),(4,'Raton logitech','Best mouse in the market',123,NULL,5,'2022-03-07 12:55:21','2022-03-07 12:55:21'),(5,'Raton logitech','Best mouse in the market',123,NULL,5,'2022-03-07 12:55:21','2022-03-07 12:55:21'),(6,'Raton logitech','Best mouse in the market',123,NULL,5,'2022-03-07 12:55:22','2022-03-07 12:55:22'),(7,'Raton logitech','Best mouse in the market',123,NULL,5,'2022-03-07 12:55:22','2022-03-07 12:55:22'),(8,'Raton logitech','Best mouse in the market',123,NULL,5,'2022-03-07 12:55:22','2022-03-07 12:55:22'),(9,'Raton logitech','Best mouse in the market',123,NULL,5,'2022-03-07 12:55:23','2022-03-07 12:55:23'),(10,'Raton logitech','Best mouse in the market',123,NULL,5,'2022-03-07 12:55:23','2022-03-07 12:55:23');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-07 14:26:57
