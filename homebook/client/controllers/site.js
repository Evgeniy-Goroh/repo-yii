'use strict';
yii2AngApp_site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/site/index', {
        templateUrl: 'views/site/index.html',
        controller: 'index'
    })
    .when('/site/about', {
        templateUrl: 'views/site/about.html',
        controller: 'about'
    })
    .when('/site/contact', {
        templateUrl: 'views/site/contact.html',
        controller: 'contact'
    })
    .otherwise({
        redirectTo: '/site/index'
    });
}])
.controller('index', ['$scope', '$http', function($scope,$http) {
    // ��������� ��� ����������� ��������������
    $scope.message = '�� ������� ������� �������� ����������. ';
}])
.controller('about', ['$scope', '$http', function($scope,$http) {
    // ��������� ��� ����������� ��������������
    $scope.message = '��� �������� � ����������� � ����������.';
}])
.controller('contact', ['$scope', '$http', function($scope,$http) {
    // ��������� ��� ����������� ��������������
    $scope.message = '������ ������. �� ����� ����!.';
}]);