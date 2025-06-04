/* Créer une base de données */
CREATE DATABASE IF NOT EXISTS `fpc-db`;

/* Charger des données initiales */
USE `fpc-db`;

/* Créer une table "cities" */
CREATE TABLE IF NOT EXISTS `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `commune_code` varchar(5) NOT NULL,
  `postal_code` varchar(5) NOT NULL,
  `population` int(11) NOT NULL,
  `department_name` varchar(255) NOT NULL,
  `department_code` varchar(3) NOT NULL,
  `region_name` varchar(255) NOT NULL,
  `region_code` varchar(3) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/* Créer une table "daily_challenge" */
CREATE TABLE IF NOT EXISTS `daily_challenge` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `city_code` varchar(5) NOT NULL,
    `date` date NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
