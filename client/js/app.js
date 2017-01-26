var app = angular.module('shoppingCartApp', ['ngRoute', 'ngResource', 'shoppingCartApp.controllers']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/products',{
                templateUrl: 'views/products.html',
                controller: 'productsController'
            })
            .when('/cart',{
                templateUrl: 'views/products.html',
                controller: 'cartController'
            })
            .otherwise({
                redirectTo: '/products'
            })
    }]);