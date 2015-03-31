'use strict';

describe('Service: Content', function () {

  // load the service's module
  beforeEach(module('bcApp'));

  // instantiate service
  var Content;
  beforeEach(inject(function (_Content_) {
    Content = _Content_;
  }));

  it('should do something', function () {
    expect(!!Content).toBe(true);
  });

});
