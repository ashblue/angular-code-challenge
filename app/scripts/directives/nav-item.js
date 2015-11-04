'use strict';

/**
 * @ngdoc directive
 * @name interviewApp.directive:nav-item
 * @description
 * # nav-item
 */
angular.module('interviewApp')
  .directive('navItem', function ($location) {
    return {
      templateUrl: 'directives/nav-item.html',
      replace: true,
      restrict: 'E',
      scope: {},
      link: function postLink(scope, element, attrs) {
        scope.name = attrs.name;
        scope.isRoot = attrs.root;
        scope.url = attrs.url;

        scope.selected = function () {
          var path = $location.path();
          return scope.isRoot && path === '/' ||
            path.includes(scope.url.replace('#', ''));
        };
      }
    };
  });
