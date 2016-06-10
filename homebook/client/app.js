'use strict';
// ������ �� ��������� ����� ����������
var serviceBase = 'http://localhost/homebook/server/web/';
// �������� ������ ���������� � ��� ����������
var yii2AngApp = angular.module('yii2AngApp', [
  'ngRoute',
  'yii2AngApp.site',
  'yii2AngApp.book'
]);
// ������� ������
var yii2AngApp_site = angular.module('yii2AngApp.site', ['ngRoute']);
var yii2AngApp_book = angular.module('yii2AngApp.book', ['ngRoute']);
 
yii2AngApp.config(['$routeProvider', function($routeProvider) {
  // ������� ��-���������
  $routeProvider.otherwise({redirectTo: '/book/index'});
}]);