var should = require('chai').should(),
    downloadImage= require('../lib/downloadImage.js'),
    config = downloadImage.config;

describe('#config', function() {
  it('should have a default configuration', function() {
    config.image.compression.should.equal('30');
  });
});