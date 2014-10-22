'use strict';

describe('Service: Playsound', function () {

  // load the service's module
  beforeEach(module('clockApp'));

  // instantiate service
  var Playsound;
  beforeEach(inject(function (_Playsound_) {
    Playsound = _Playsound_;
  }));

  it('should do something', function () {
    expect(!!Playsound).toBe(true);
  });

});
