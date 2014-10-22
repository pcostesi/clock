'use strict';

describe('Directive: arc', function () {

  // load the directive's module
  beforeEach(module('clockApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<arc></arc>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the arc directive');
  }));
});
