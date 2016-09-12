'use strict';

describe('Directive: personDetail', function () {

  // load the directive's module
  beforeEach(module('angularmaterialApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<person-detail></person-detail>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the personDetail directive');
  }));
});
