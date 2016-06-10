'use strict';
yii2AngApp_book.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/book/index', {
        templateUrl: 'views/book/index.html',
        controller: 'index'
    })
    .when('/book/create', {
        templateUrl: 'views/book/create.html',
        controller: 'create',
        resolve: {
            book: function(services, $route){
                return services.getBooks();
            }
        }
    })
    .when('/book/update/:bookId', {
        templateUrl: 'views/book/update.html',
        controller: 'update',
        resolve: {
          book: function(services, $route){
            var bookId = $route.current.params.bookId;
            return services.getBook(bookId);
          }
        }
    })
	.when('/book/detail/:bookId', {
        templateUrl: 'views/book/detail.html',
        controller: 'update',
        resolve: {
          book: function(services, $route){
            var bookId = $route.current.params.bookId;
            return services.getBook(bookId);
          }
        }
    })
	
	
    .when('/book/delete/:bookId', {
        templateUrl: 'views/book/index.html',
        controller: 'delete',
    })
    .otherwise({
        redirectTo: '/book/index'
    });
}]);
 
yii2AngApp_book.controller('index', ['$scope', '$http', 'services', 
    function($scope,$http,services) {
    $scope.message = '������ ����';
    
	$scope.sortType     = 'Title'; // �������� ���������� �� ���������
    $scope.sortReverse  = false;
	$scope.searchFish   = '';
	$scope.itemsByPage=3;
	
	
	
	services.getBooks().then(function(data){
        $scope.books = data.data;
		
		
    });    
    $scope.deleteBook = function(bookID) {
        if(confirm("������� ����� � �������: " + bookID)==true && bookID>0){
            services.deleteBook(bookID);    
            $route.reload();
        }
    };
}])
.controller('create', ['$scope', '$http', 'services','$location','book', 
    function($scope,$http,services,$location,book) {
    $scope.message = '���������� �����.';
    $scope.createBook = function(book) {
        var results = services.createBook(book);
    }  
}])


.controller('update', ['$scope', '$http', '$routeParams', 'services','$location','book', 
    function($scope,$http,$routeParams,services,$location,book) {
    $scope.message = '������� ������';
    var original = book.data;
    $scope.book = angular.copy(original);
    $scope.isClean = function() {
        return angular.equals(original, $scope.book);
    }
    $scope.updateBook = function(book) {    
        var results = services.updateBook(book);
    } 
}]);