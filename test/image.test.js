var should        = require('chai').should(),
    image         = require('../lib/api/image.js'),
    data          = require('../data.json'),
    defaultCamera = data.cameras[0];

describe('#image', function() {
  describe('#config', function() {
    it('should have snapshot parameters', function() {
      defaultCamera.snapshot.compression.should.equal(30);
    });
  });

  describe('#getFileName', function() {
    it('should return fileName with a certain length', function() {
      var fileName = image.getFileName({id:'1'});
      var isLargerThan = fileName.length > 16;
      isLargerThan.should.equal(true);
    });
  });

  describe('#getDownloadPath', function() {
    it('should return downloadPath with a certain length', function() {
      var path = image.getDownloadPath(defaultCamera);
      var isLargerThan = path.length > 2;
      isLargerThan.should.equal(true);
    });
  });

  describe('#getDownloadUrl', function() {
    it('should return downloadUrl with a certain length', function() {
      var url = image.getDownloadUrl(defaultCamera);
      var isLargerThan = url.length > 31;
      isLargerThan.should.equal(true);
    });
  });
  
  describe('#download', function() {
   // TODO add test
  });

});