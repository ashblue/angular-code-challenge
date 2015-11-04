'use strict';

/**
 * @ngdoc directive
 * @name interviewApp.directive:error
 * @description
 * # error
 */
angular.module('interviewApp')
  .directive('error', function () {
    return {
      templateUrl: 'views/directives/error.html',
      restrict: 'E'
    };
  });
