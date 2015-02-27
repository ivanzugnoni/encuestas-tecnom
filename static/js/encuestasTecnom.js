'use strict';

var encuestasApp = angular.module('encuestasApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'ngAnimate',
]);

encuestasApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/templates/encuesta.html',
        controller: 'encuestaController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);