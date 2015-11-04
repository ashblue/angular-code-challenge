'use strict';

/**
 * @ngdoc filter
 * @name interviewApp.filter:removeString
 * @function
 * @description
 * # removeString
 * Filter in the interviewApp.
 */
angular.module('interviewApp')
  .filter('replace', function () {
    return function (input, val1, val2) {
      return input.replace(val1, val2).trim();
    };
  });
