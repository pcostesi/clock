'use strict';

angular.module('clockApp')
  .controller('MainCtrl', ['$scope', 'Clockservice', function ($scope, ClockService) {
    var developers = $scope.developers = [];

    $scope.add = function(category, price) {
      price = parseInt(price, 10);
      if (price < 0 || isNaN(price)) {
        return;
      }

      switch (category) {
        case 'developer':
          developers.push({
            category: category,
            price: price
          });
          break;

        default:
          break;
      }
    };

    $scope.start = function() {
      var cph = 0;
      for (var i = 0; i < developers.length; i++) {
        cph += developers[i].price;
      }
      ClockService.startTicking(cph);
    };
  }]);
