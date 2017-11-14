var weatherApp = angular.module('weatherApp', [  
    'ngRoute',
    'ngStorage',
    'ngSanitize'
])
.config(function($routeProvider){
    $routeProvider.when('/',
    {
        templateUrl:'views/main.html',
        controller:'mainPageController'
    });
    $routeProvider.when('/city/:itemId',
    {
        templateUrl:'views/city.html',
        controller:'cityForecastController'
    });
    $routeProvider.otherwise({redirectTo: '/'});
});