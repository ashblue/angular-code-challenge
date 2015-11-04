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
    'ngResource',
    'ngRoute',
    'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/cities/index.html',
        controller: 'CitiesIndexCtrl',
        controllerAs: 'cities'
      })
      .when('/cities', {
        templateUrl: 'views/cities/index.html',
        controller: 'CitiesIndexCtrl',
        controllerAs: 'cities'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/cities/:cityId', {
        templateUrl: 'views/cities/show.html',
        controller: 'CitiesShowCtrl',
        controllerAs: 'cities/show'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
