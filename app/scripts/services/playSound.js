'use strict';

angular.module('clockApp')
  .service('Playsound', function Playsound() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    var Playsound = function(id) {
    };

    Playsound.prototype.play = function() {
      this.source.start(0);                           // play the source now
    };
    return Playsound;
  });
