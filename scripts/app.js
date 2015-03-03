'use strict';

var encuestasApp = angular.module('encuestasApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'ngAnimate',
    'checklist-model',
]);

encuestasApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/views/encuesta.html',
        controller: 'encuestaController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
