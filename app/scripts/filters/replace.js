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
    /**
     * Find and replace a string via filter
     * @arg {string} text Text we want to edit
     * @arg {string} find String we want to find
     * @arg {string} replace What to replace the discovered string with
     * @returns The original string with replaced content. Trimmed for white-space edge cases.
     */
    return function (text, find, replace) {
      if (text !== undefined) {
        return text.replace(find, replace).trim();
      } else {
        return '';
      }
    };
  });
