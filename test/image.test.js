var should = require('chai').should(),
    image= require('../lib/api/image.js'),
    params = image.config.parameters;

describe('#config', function() {
  it('should have a default configuration', function() {
    params.compression.should.equal('30');
  });
});

describe('#getFileName', function() {
  it('should return fileName with a certain length', function() {
  	var fileName = image.getFileName();
  	var isLargerThan = fileName.length > 17;
    isLargerThan.should.equal(true);
  });
});

describe('#getDownloadPath', function() {
  it('should return downloadPath with a certain length', function() {
  	var path = image.getDownloadPath();
  	var isLargerThan = path.length > 2;
    isLargerThan.should.equal(true);
  });
});

describe('#getDownloadUrl', function() {
  it('should return downloadUrl with a certain length', function() {
  	var url = image.getDownloadUrl({
      brand: 'Axis',
      ip: '192.168.0.90',
      username: 'root',
      password: 'pass'
    });
  	var isLargerThan = url.length > 31;
    isLargerThan.should.equal(true);
  });
});
describe('#download', function() {
 // TODO add test
});