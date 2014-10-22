'use strict';

angular.module('clockApp')
  .service('Clockservice', ['$interval', '$rootScope', function Clockservice($interval, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var timer;
    var started;
    var costPerHour;

    this.startTicking = function(costPerHour) {
      this.costPerHour = costPerHour;
      if (this.timer) {
        $interval.cancel(timer);
      }
      this.started = new Date();
      this.timer = $interval(this.tick.bind(this), 1000 / 24.0);
    };

    this.tick = function() {
      var msec = new Date() - this.started;
      var spent = (this.costPerHour / (60 * 60 * 1000)) * msec;
      $rootScope.$broadcast('tick', msec, spent);
    };
  }]);
