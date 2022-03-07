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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `phone` int DEFAULT NULL,
  `shipping_adress` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` char(76) NOT NULL,
  `country` varchar(60) NOT NULL,
  `createdAt` varchar(100) DEFAULT NULL,
  `updatedAt` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jose Manuel',123456678,'Instituto Rafael Alberti','Josemanuel@gmail.com','123456789','Spain','2022-03-07 12:12:58','2022-03-07 12:12:58'),(2,'Jose Manuel',123456678,'Instituto Rafael Alberti','Josemanuel2@gmail.com','123456789','Spain','2022-03-07 12:13:20','2022-03-07 12:13:20'),(3,'Jose Manuel',123456678,'Instituto Rafael Alberti','Josemanuel3@gmail.com','123456789','Spain','2022-03-07 12:13:23','2022-03-07 12:13:23'),(4,'Jose Manuel',123456678,'Instituto Rafael Alberti','Josemanuel4@gmail.com','123456789','Spain','2022-03-07 12:13:25','2022-03-07 12:13:25'),(5,'Jose Manuel',123456678,'Instituto Rafael Alberti','Josemanuel5@gmail.com','123456789','Spain','2022-03-07 12:13:29','2022-03-07 12:13:29'),(6,'Jose Manuel',123456678,'Instituto Rafael Alberti','Josemanuel6@gmail.com','123456789','Spain','2022-03-07 12:13:31','2022-03-07 12:13:31'),(7,'Jose Manuel',123456678,'Instituto Rafael Alberti','Josemanuel7@gmail.com','123456789','Spain','2022-03-07 12:13:34','2022-03-07 12:13:34'),(8,'Jose Manuel',123456678,'Instituto Rafael Alberti','Josemanuel8@gmail.com','123456789','Spain','2022-03-07 12:13:36','2022-03-07 12:13:36'),(9,'Jose Manuel',123456678,'Instituto Rafael Alberti','Josemanuel9@gmail.com','123456789','Spain','2022-03-07 12:13:38','2022-03-07 12:13:38'),(10,'Jose Manuel',123456678,'Instituto Rafael Alberti','Josemanuel10@gmail.com','123456789','Spain','2022-03-07 12:13:41','2022-03-07 12:13:41');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
