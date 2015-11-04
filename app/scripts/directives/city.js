'use strict';

/**
 * @ngdoc directive
 * @name interviewApp.directive:city
 * @description
 * # city
 */
angular.module('interviewApp')
  .directive('city', function () {
    return {
      templateUrl: 'directives/city.html',
      restrict: 'E',
      replace: true
    };
  });
