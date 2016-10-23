'use strict';

describe('Service: auth1', function () {

  // load the service's module
  beforeEach(module('culturalystApp'));

  // instantiate service
  var auth1;
  beforeEach(inject(function (_auth1_) {
    auth1 = _auth1_;
  }));

  it('should do something', function () {
    expect(!!auth1).toBe(true);
  });

});
