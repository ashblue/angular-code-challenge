'use strict';

/**
 * @ngdoc directive
 * @name interviewApp.directive:photo
 * @description
 * # photo
 */
angular.module('interviewApp')
  .directive('photo', function () {
    return {
      templateUrl: 'views/directives/photo.html',
      restrict: 'E',
      replace: true
    };
  });
