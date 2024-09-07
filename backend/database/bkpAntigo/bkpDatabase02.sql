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
INSERT INTO `tb_like` VALUES (1,1,2,'2024-09-05'),(2,3,5,'2024-09-05'),(3,10,2,'2024-09-05');
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
INSERT INTO `tb_reply` VALUES (1,'esse tweet é do carai',2,1,NULL),(2,'num é que é ',2,1,1),(3,'testando',2,1,2);
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
  `authorID` int NOT NULL,
  `createdAt` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_tweet`
--

LOCK TABLES `tb_tweet` WRITE;
/*!40000 ALTER TABLE `tb_tweet` DISABLE KEYS */;
INSERT INTO `tb_tweet` VALUES (1,'Hello word,!',1,'2024-09-04'),(2,'Hello word,!',1,'2024-09-04'),(3,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',2,'2024-09-04'),(4,'hy do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',2,'2024-09-05'),(5,'Eu costumava pensar que era indeciso, mas agora não tenho tanta certeza.',3,'2024-09-05'),(6,'Arrumo a casa para a minha mãe quase todos os dias. Quase arrumo na segunda, quase arrumo na terça, quase arrumo na quarta.',3,'2024-09-05'),(7,'Eu tô com o controle da situação, mas ele tá sem pilha.',2,'2024-09-05');
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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES (1,'teste','teste@gmail.com','123',0),(2,'Daniel','galvoam@gamil.com','123',0),(3,'exampleUser','example@example.com','yourPassword123',0),(4,'Daniel','daniel@gmail','123',0),(5,'Maria','marimeiomario45@gmail.com','123',0),(6,'eduardo','ti2@texsadobrasil.com.br','(Texs@)*2021',0),(7,'umsuauriao','umaemail@gmail','$2b$10$pXP3zJBnpCrlpurIgj9noOKOHlodfZgwFggE0J/8UVtrl7UZwYOaC',0),(8,'umsuauriao','ti2@texsadobrasil.com.br','$2b$10$PFXWj3kD9kV0i8XwQwCS0eeqSd/F3Ohr4h/qrwPxigVpArHkIl.ZW',0),(9,'ablabla','ti2@texsadobrasil.com.br','$2b$10$3UZyttuVOIc6/fEMNDc/fuFVqnrS55P2/AFVRkjanM/NcNjlWFnOe',0),(10,'efrnds','efrnds@gmail.com',NULL,0),(11,'Danielmartis','daniel2@gmail.com','$2b$10$KhjjDhflyiYFCA58CbaLs..UW.0m.E6zgInS0J1pgNjDg0NtWmDBe',0),(12,'teste','umaemail@gmail','$2b$10$Rrs/yZ2lnKu64VU5oPW1IuXTU0m84O4GRlwYiqv4A8Qqvomd38iUq',0),(13,'teste','umaemail@gmail','$2b$10$8d.KQTell.IcR5N90tX5oedwAchLhAyvjtkoLQJe6.VOhi0amfrQy',0),(14,'teste','umaemail@gmail','$2b$10$kPt2bvqsQBkzTVAV38PWg.QADIqLP.JNquo6t2m3be3m4t9jnX69O',0),(15,'teste','umaemail@gmail','$2b$10$xvNdM6Ta.Lhze80J7L0XweW00frEdYSQ3J3PMs53fONeep2mg9Bl6',0),(16,'eduardo','ti2@texsadobrasil.com.br',NULL,0),(17,'eduardo','ti2@texsadobrasil.com.br',NULL,0),(18,'eduardo','ti2@texsadobrasil.com.br',NULL,0),(19,'eduardo','ti2@texsadobrasil.com.br',NULL,0),(20,'rwarBSIO','daniel@fmail','$2b$10$veNfaArXG65IXUKYeLLhs.ks2/x6ymN84RRYsbkjRpGMLSggKYR7C',0),(21,'whatsapp','whatsapp@meta.com.br',NULL,0),(22,'whatsapp','whatsapp@meta.com.br',NULL,0),(23,'whatsapp','whatsapp@meta.com.br',NULL,0),(24,'umUsuario','user@email.com','$2b$10$iQKSsLPgfAw8Wj6QIPQBo.kSUKNCC.sM4sWaOtL4ScvMHvr0LDI.K',0),(32,'daniel','danielgalvao.afawork@gmail.com','$2b$10$T/WU8nfrhSfkmiy5UVlrjeVbSUvQlpb3wH0lXyZwS4Tr4NLWELTiO',1),(33,'pedro','pedrorodriguesssrrr@gmail.com','$2b$10$oj0lyviOuzRPc/Qa3zRYHextso3Jcx2WWMTYxEdJzb/yKZohsI2.W',0),(34,'wendrell','wendrellpossatooliveira@gmail.com','$2b$10$eWDD71uFdsbJcYVuF4xdOum1SS.s0/Dh4MRJV7RSgiMkbsMZF1J4O',0),(35,'eduardo','eduardo.fernandes.silva13@gmail.com','$2b$10$5Mor74Fu5beEljhLutBGFeZmVeWaDo/QaaO09PCoCopq/BCeyaYq2',0),(36,'d','galvaomartinsdaniel@gmail.com','$2b$10$XeN/mc02xCsLBINlxSSZJOV9qMFUILlYT1i0msnnTsC/84w1Ogxte',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user_tokens`
--

LOCK TABLES `tb_user_tokens` WRITE;
/*!40000 ALTER TABLE `tb_user_tokens` DISABLE KEYS */;
INSERT INTO `tb_user_tokens` VALUES (6,33,'UTHSDX','2024-09-07 00:27:28'),(7,34,'ZMOYQC','2024-09-07 00:27:50'),(8,35,'YVPXXF','2024-09-07 00:28:16');
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

-- Dump completed on 2024-09-07  1:04:44
