'use strict';

/**
 * @ngdoc function
 * @name interviewApp.controller:CitiesIndexCtrl
 * @description
 * # CitiesIndexCtrl
 * Controller of the interviewApp
 */
angular.module('interviewApp')
  .controller('CitiesIndexCtrl', function ($scope, City) {
    var cities = City.query(function () {
      $scope.cities = cities;
    });
  });
