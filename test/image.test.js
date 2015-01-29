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

  describe('#getFileName', function () {

    it('should be able to have an id prefix', function() {
      var id = '28';
      var fileName = image.getFileName({id: id}),
          firstChars = fileName.substr(0, id.length);
      firstChars.should.equal(id);
    });

    it('should be able to ignore id prefix if there is no id', function() {
      var year = String(new Date().getFullYear()),
          fileName = image.getFileName({}),
          firstChars = fileName.substr(0, year.length);
      firstChars.should.equal(year);
      fileName = image.getFileName();
      firstChars.should.equal(year);
    });

    it('should be able to add a custom prefix', function() {
      var cameraConfiguration = data.cameras[0],
          prefix = cameraConfiguration.snapshot.fileNamePrefix,
          fileName = image.getFileName(cameraConfiguration),
          firstChars = fileName.substr(0, prefix.length);
      firstChars.should.equal(prefix);
    });

    it('should return fileName with a timestamp in ISO format', function() {
      var fileName = image.getFileName({id:'1'});
      (fileName.length > 28).should.equal(true);
      (fileName.indexOf('T') > -1).should.equal(true);
      (fileName.indexOf('Z') > -1).should.equal(true);
    });
  });

  describe('#getDownloadPath', function () {
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