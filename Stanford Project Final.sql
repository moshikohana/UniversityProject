-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: stanford
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `courseName` varchar(45) NOT NULL,
  `courseDesc` varchar(99) DEFAULT NULL,
  `courseImg` varchar(99) DEFAULT NULL,
  `numberOfStudents` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'HTML','C1','https://www.earthcam.net/graphics/technology/html5badge.png',NULL),(2,'CSS','C2','http://w3widgets.com/responsive-slider/img/css3.png',NULL),(3,'jQuery','C3','http://www.foggyt.com/images/logo/jquery.png',NULL),(7,'Boot-Strap','Boot-Strap','https://www.anglerfox.com/au/wp-content/uploads/2015/09/UI_Shield_Bootstrap.png',NULL),(8,'NodeJS','Server side base on JS.','https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png',NULL);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `link`
--

DROP TABLE IF EXISTS `link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lnk_userId` int(11) NOT NULL,
  `lnk_courseId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `link`
--

LOCK TABLES `link` WRITE;
/*!40000 ALTER TABLE `link` DISABLE KEYS */;
INSERT INTO `link` VALUES (97,3,2),(98,4,2),(109,1,6),(110,2,2),(111,2,6),(112,81,2),(113,81,8);
/*!40000 ALTER TABLE `link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `userPassword` int(11) NOT NULL,
  `userEmail` varchar(45) NOT NULL,
  `userImg` varchar(999) DEFAULT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Nir Saado',1,'s1@gmail.com','https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/16729461_10208686792984335_9086882553581202741_n.jpg?oh=98926bb06a6bcb6cb3589ea842d276a5&oe=59CD41C0','student'),(2,'Moshiko Ohana',2,'s2@gmail.com','https://scontent-frx5-1.xx.fbcdn.net/v/l/t1.0-9/11755171_10207252537061723_5236964276368356510_n.jpg?oh=b70b36cea4c5ae2339e42d88ff526bb9&oe=59E88D66','student'),(3,'Meir Aflalo',3,'s3@gmail.com','https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/12219566_10204095964759332_6203604846918962309_n.jpg?oh=b7440ae220dd7ef5d755bacedec44800&oe=59D4D5F1','student'),(4,'Yotam Rotem',4,'s4@gmail.com','https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/17098718_10155234896409674_5326592585857303037_n.jpg?oh=4fd98253d359aa36fa8f2ad41e5c9b3b&oe=59E64B31','student'),(80,'1',1,'1','1','sale'),(81,'Shubby',2,'shubby@gmail.com','http://img01.deviantart.net/9835/i/2014/240/0/8/_shubby__by_malakialagatta-d7pyw18.jpg','student'),(82,'Dubby',3,'dubby@gmail.com','https://previews.123rf.com/images/antonlunkov/antonlunkov1602/antonlunkov160200298/52619762-Shubby-brown-owl-vector-cartoon-series-owls-Stock-Vector.jpg','student'),(83,'Mark',1,'mark@facebook.com','http://cdn3.thr.com/sites/default/files/imagecache/landscape_928x523/2012/01/zuck_a_0.jpg','administrator'),(84,'Sundar',1,'sundar@gmail.com','http://img.deusm.com/informationweek/2015/08/1321706/SundarPichai129-(2).jpg','administrator'),(85,'Bill',1,'bill@microsoft','http://images.boomsbeat.com/data/images/full/595/bill-gates-jpg.jpg','administrator'),(86,'Steve',1,'steve@apple.com','http://www.adweek.com/agencyspy/wp-content/uploads/sites/7/2015/06/steve-jobs.jpg','administrator'),(89,'4',4,'4@4','4','sale'),(106,'4',4,'4@4','','sale'),(107,'5',5,'5@5','','sale'),(108,'6',6,'6@6','','sale'),(111,'Gal',1234,'gal@gmail.com','https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/14910289_1285159641515548_7989788001878521774_n.jpg?oh=dc9b7bf32f25cf1c1b372645aac334a1&oe=5A002875','owner'),(112,'a',1,'a@a','','sale'),(114,'d',1,'d@d','','sale'),(116,'q',1,'q@q','','administrator');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-13  9:02:55
