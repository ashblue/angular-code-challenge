'use strict';

/**
 * @ngdoc service
 * @name interviewApp.City
 * @description
 * # City
 * Factory in the interviewApp.
 */
angular.module('interviewApp')
  .factory('City', function ($resource) {
    // You could use an $http.get() request here, but resources is much more efficient
    // and only requires roughly 1 line of code
    return $resource('http://mqlocal.aol.com/photos/:cityId', {
      cityId: '@id'
    });
  });
