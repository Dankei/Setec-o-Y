-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: autorack.proxy.rlwy.net    Database: railway
-- ------------------------------------------------------
-- Server version	9.0.1

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
-- Table structure for table `tb_follow`
--

DROP TABLE IF EXISTS `tb_follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_follow` (
  `followerID` bigint unsigned NOT NULL,
  `followedID` bigint unsigned NOT NULL,
  PRIMARY KEY (`followerID`,`followedID`),
  KEY `following_id` (`followedID`),
  CONSTRAINT `tb_follow_ibfk_1` FOREIGN KEY (`followerID`) REFERENCES `tb_user` (`id`),
  CONSTRAINT `tb_follow_ibfk_2` FOREIGN KEY (`followedID`) REFERENCES `tb_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_follow`
--

LOCK TABLES `tb_follow` WRITE;
/*!40000 ALTER TABLE `tb_follow` DISABLE KEYS */;
INSERT INTO `tb_follow` VALUES (59,59),(61,59),(62,59),(59,60),(62,61),(61,62);
/*!40000 ALTER TABLE `tb_follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_like`
--

DROP TABLE IF EXISTS `tb_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_like` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `tweetID` int NOT NULL,
  `createdAT` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_like`
--

LOCK TABLES `tb_like` WRITE;
/*!40000 ALTER TABLE `tb_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_reply`
--

DROP TABLE IF EXISTS `tb_reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_reply` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `userID` int NOT NULL,
  `tweetID` int NOT NULL,
  `replyID` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_reply`
--

LOCK TABLES `tb_reply` WRITE;
/*!40000 ALTER TABLE `tb_reply` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_tweet`
--

DROP TABLE IF EXISTS `tb_tweet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_tweet` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `authorID` varchar(255) DEFAULT NULL,
  `createdAt` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_tweet`
--

LOCK TABLES `tb_tweet` WRITE;
/*!40000 ALTER TABLE `tb_tweet` DISABLE KEYS */;
INSERT INTO `tb_tweet` VALUES (26,'teste','1','2024-09-12'),(27,'teste2','1','2024-09-12'),(28,'teste3','1','2024-09-12'),(29,'é isso ai','1','2024-09-12'),(30,'enchendo linguiça pra ver responsividade','1','2024-09-12'),(31,'MAIS UM','1','2024-09-12'),(34,'Miopia is tweeting right now ','61','2024-09-13'),(35,'teste','59','2024-09-13'),(36,'bla bla bla\n\n','59','2024-09-13'),(37,'Testando','59','2024-09-13'),(41,'testando do meu perfil (miopia)','61','2024-09-13'),(42,'https://open.spotify.com/track/0qsKefQyXCzaxjHbOcd8IU','61','2024-09-13'),(43,'Este é o meu primeiro Yeet!','62','2024-09-13'),(44,'@edudfrty pega na minha e balança','61','2024-09-14'),(45,'dasfsdf','59','2024-09-15'),(46,'rteste','59','2024-09-15'),(47,'Bla bla','59','2024-09-15');
/*!40000 ALTER TABLE `tb_tweet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES (1,'Pedro','miopia@miopia','123',0),(55,'whatsapp','emaildoedu4@gmail.com','$2b$10$U6OxjSu/ciPcUNTkNzZI5ujDZClGjhPP4H2KtRb2bpBC8hju0.MRm',1),(56,'zapzap','eduardo.fernandes.silva13@gmail.com','$2b$10$19To3kaGG6PBEK2A90NHRO2kJHqO/yhBo9SVzGeTs6Svk.mHw9Ta2',0),(57,'caralhoporra','contato.efrnds@outlook.com','$2b$10$99oidZtB5EQEhTi6nmXl8OtSjEDvY.ppitMbM2g/kJLXK9eOjsixO',1),(59,'Daniel','galvaomartinsdaniel@gmail.com','$2b$10$AK77EDGHFXOxO6VxlYxKZO7FWBl7iDeOqyz.2TNZyPTC3iiYXlTiO',1),(60,'cauasmo','kakamoraesjs@gmail.com','$2b$10$B5NkIJyg8sXO28puyvmrhOUzz78MuQuQdAnE0JEYzV6Il11XNwj..',1),(61,'pedrordgs','pedrorodriguesssrrr@gmail.com','$2b$10$5D7vk71zpI6Wl5bLwm4kouy48njeFeiOPAp7zTb2Ow8O8FWyLbrsC',1),(62,'edudfrty','edudfrs@gmail.com','$2b$10$jdbNaHoBo1hjpERQsNAwy.Gq0te3G0qIPlhPowZpF9OAg4iApekF.',1),(63,'eduardo','educorpinho@gmail.com','$2b$10$euneQc3fyCJZEjs5rNkT9OA9HCki/hfouCXGvW4hgjq5X7drVzGoa',1),(65,'afawork','danielgalvao.afawork@gmail.com','$2b$10$TBE5V1WJOdHl32F/s1rWGuaqbc.jBtTbiNPxwsS9t2C2hhDlCvidW',1);
/*!40000 ALTER TABLE `tb_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user_tokens`
--

DROP TABLE IF EXISTS `tb_user_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_user_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `token` varchar(6) NOT NULL,
  `expires_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tb_user_tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tb_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user_tokens`
--

LOCK TABLES `tb_user_tokens` WRITE;
/*!40000 ALTER TABLE `tb_user_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_user_tokens` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-16  0:15:35
