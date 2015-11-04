'use strict';

/**
 * @ngdoc overview
 * @name interviewApp
 * @description
 * # interviewApp
 *
 * Main module of the application.
 */
angular
  .module('interviewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/cities/index.html',
        controller: 'CitiesIndexCtrl',
        controllerAs: 'cities'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
