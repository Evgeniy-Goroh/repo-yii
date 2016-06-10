'use strict';
// Ссылка на серверную часть приложения
var serviceBase = 'http://localhost/homebook/server/web/';
// Основной модуль приложения и его компоненты
var yii2AngApp = angular.module('yii2AngApp', [
  'ngRoute',
  'yii2AngApp.site',
  'yii2AngApp.book'
]);
// рабочий модуль
var yii2AngApp_site = angular.module('yii2AngApp.site', ['ngRoute']);
var yii2AngApp_book = angular.module('yii2AngApp.book', ['ngRoute']);
 
yii2AngApp.config(['$routeProvider', function($routeProvider) {
  // Маршрут по-умолчанию
  $routeProvider.otherwise({redirectTo: '/book/index'});
}]);