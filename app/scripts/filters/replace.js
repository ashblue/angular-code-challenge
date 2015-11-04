'use strict';

/**
 * @ngdoc filter
 * @name interviewApp.filter:replace
 * @function
 * @description
 * # Removes a string and replaces it with a new value
 * Filter in the interviewApp.
 */
angular.module('interviewApp')
  .filter('replace', function () {
    return function (input, val1, val2) {
      return input.replace(val1, val2).trim();
    };
  });
