'use strict';

angular.module('clockApp')
  .directive('clock', [function () {
    return {
      template: '<div class="clock-container">' +
                '<div id="clock"></div><h1 class="spent">Spent: ${{spent}}</h1>' +
                '<audio preload="auto" id="coin" src="coin.mp3"></audio>' +
                '<audio preload="auto" id="cash" src="cash.mp3"></audio>' +
                '</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var rad = 300; //attrs['radius'] || Math.min(element.width(), element.height()) / 2 || 300;
        var param = {stroke: "#fff", "stroke-width": 2};
        var r = Raphael('clock', '100%', '100%');
        r.setViewBox(0, 0, 600, 600, false);

        r.customAttributes.arc = function (value, total, R, color) {
          var alpha = 360 / total * value
            , a = (90 - alpha) * Math.PI / 180
            , x = rad + R * Math.cos(a)
            , y = rad - R * Math.sin(a)
            , path;

          if (total == value) {
            path = [["M", rad, rad - R], ["A", R, R, 0, 1, 1, rad, rad - R]];
          } else {
            path = [["M", rad, rad - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
          }
          return {path: path, stroke: color};
        };

        var setValue = function (hand, value, total, R, color) {
          hand.animate({arc: [value, total, R, color]});
        };

        var sec = r.path().attr(param).attr({arc: [0, 60, rad - 30, 'green']});
        var min = r.path().attr(param).attr({arc: [0, 60, rad - 20, 'blue']});
        var hor = r.path().attr(param).attr({arc: [0, 12, rad - 10, 'red']});

        scope.spent = 0;

        scope.$on('tick', function(ev, msec, spent) {
          var curSec = msec / 1000;
          var curMin = curSec / 60;
          var curHour = curMin / 60;
          setValue(sec, curSec % 60, 60, rad - 10, 'green');
          setValue(min, curMin % 60, 60, rad - 20, 'blue');
          setValue(hor, curHour % 60, 60, rad - 30, 'red');
          var newlySpent = parseInt(spent, 10);
          if (scope.spent - newlySpent) {
            document.getElementById('coin').play();
            if (newlySpent % 100 == 0) {
              document.getElementById('cash').play();
            }
          }
          scope.spent = newlySpent;
          
        });

      }
    };
  }]);
