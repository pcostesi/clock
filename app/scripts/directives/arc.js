'use strict';

angular.module('clockApp')
  .directive('arc', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      replace: true
    };
  });
