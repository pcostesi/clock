/*eslint-env browser*/
/*globals: angular, jQuery, $*/

'use strict';

angular.module('clockApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tick', {
        templateUrl: 'views/tick.html',
        controller: 'TickCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
