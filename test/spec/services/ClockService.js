'use strict';

describe('Service: Clockservice', function () {

  // load the service's module
  beforeEach(module('clockApp'));

  // instantiate service
  var Clockservice;
  beforeEach(inject(function (_Clockservice_) {
    Clockservice = _Clockservice_;
  }));

  it('should do something', function () {
    expect(!!Clockservice).toBe(true);
  });

});
