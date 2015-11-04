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
    return $resource('http://mqlocal.aol.com/photos/:cityId', {cityId: '@id'});
  });
