var should = require('chai').should(),
    baseService = require('../lib/util/baseService.js');

describe('#baseService', function() {
  describe('#getBaseUrl', function() {
    it('should have a default configuration', function() {
      var url = baseService.getBaseUrl({ip: '192.168.0.1'});
      (url.length > 10).should.equal(true);
    });
  });

  describe('#call', function() {
    //TODO
  });
});