-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Июн 10 2016 г., 14:39
-- Версия сервера: 5.5.25
-- Версия PHP: 5.6.22

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `homebook`
--

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(150) NOT NULL,
  `Author` varchar(100) NOT NULL,
  `Year` int(4) NOT NULL,
  `Prewiev` varchar(2000) NOT NULL,
  `IMG` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=35 ;

--
-- Дамп данных таблицы `books`
--

INSERT INTO `books` (`ID`, `Title`, `Author`, `Year`, `Prewiev`, `IMG`) VALUES
(1, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(3, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(8, 'Название', 'Автор', 2013, 'тест', 'Картинка'),
(17, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(18, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(19, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(20, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(21, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(22, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(23, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(24, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(25, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(26, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(27, 'Название', 'Автор', 2016, 'Описание', 'Картинка'),
(28, 'Название', 'Автор', 2016, 'Описание', 'Картинка');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
