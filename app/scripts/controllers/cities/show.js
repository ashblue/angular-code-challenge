'use strict';

/**
 * @ngdoc function
 * @name interviewApp.controller:CitiesShowCtrl
 * @description
 * # CitiesShowCtrl
 * Controller of the interviewApp
 */
angular.module('interviewApp')
  .controller('CitiesShowCtrl', function ($scope, $routeParams, City) {
    var city = City.get({cityId: $routeParams.cityId}, function () {
      $scope.city = city;
    });
  });
