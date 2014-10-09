
define([
    'angular',
    'app/boot',
    'app/main/controllers/MainController',
    'app/promises/controllers/PromisesController',
    'app/services/controllers/ServicesController',
], function(angular) {
    'use strict';
    return angular.module('myApp').config(function($routeProvider) {
        $routeProvider
            .when('/main', {
                controller: 'MainController',
                templateUrl: 'app/main/views/main.html'
            })
            .when('/promises', {
                controller: 'PromisesController',
                templateUrl: 'app/promises/views/promises.html'
            })
            .when('/services', {
                controller: 'ServicesController',
                templateUrl: 'app/services/views/services.html'
            })
            .otherwise({
                redirectTo: '/main'
            });
    });
});