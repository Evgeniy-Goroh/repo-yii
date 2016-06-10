<?php
define("DB_HOST", "localhost");
define("DB_LOGIN", "root");
define("DB_PASSWORD", "");

mysql_connect(DB_HOST, DB_LOGIN, DB_PASSWORD) or die(mysql_error());

$sql = 'CREATE DATABASE homebook';
mysql_query($sql) or die(mysql_error());

mysql_select_db('homebook') or die(mysql_error());


$sql = "
CREATE TABLE IF NOT EXISTS `books` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(150) NOT NULL,
  `Author` varchar(100) NOT NULL,
  `Year` int(4) NOT NULL,
  `Prewiev` varchar(2000) NOT NULL,
  `IMG` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8";
mysql_query($sql) or die(mysql_error());

$sql = "INSERT INTO `books` (`ID`, `Title`, `Author`, `Year`, `Prewiev`, `IMG`) VALUES
(1, 'Название', 'Автор', '2016', 'Описание', 'Картинка'),
(2, 'Название', 'Автор', '2016', 'Описание', 'Картинка'),
(3, 'Название', 'Автор', '2016', 'Описание', 'Картинка');
";
mysql_query($sql) or die(mysql_error());

mysql_close();

print '<p>Структура базы данных успешно создана!</p>';
?>