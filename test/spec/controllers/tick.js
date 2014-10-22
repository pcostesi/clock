'use strict';

describe('Controller: TickCtrl', function () {

  // load the controller's module
  beforeEach(module('clockApp'));

  var TickCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TickCtrl = $controller('TickCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
