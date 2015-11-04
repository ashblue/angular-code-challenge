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
      // No name attribute, so why don't we add one by adjusting the description
      for (var i = 0; i < cities.length; i++) {
        cities[i].name = cities[i].description.replace(cities[i].id, '').trim();
      }

      $scope.cities = cities;
    }, function () {
      $scope.error = 'Failed to retrieve data from AOL server.';
    });
  });
