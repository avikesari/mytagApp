'use strict';

/**
 * @ngdoc overview
 * @name mytagAppApp
 * @description
 * # mytagAppApp
 *
 * Main module of the application.
 */
angular
  .module('mytagAppApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
