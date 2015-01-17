var should = require('chai').should(),
    image= require('../lib/api/image.js'),
    config = image.config;

describe('#config', function() {
  it('should have a default configuration', function() {
    config.image.compression.should.equal('30');
  });
});

describe('#getFileName', function() {
 // TODO add test
});

describe('#getDownloadPath', function() {
 // TODO add test
});

describe('#getDownloadUrl', function() {
 // TODO add test
});
describe('#download', function() {
 // TODO add test
});