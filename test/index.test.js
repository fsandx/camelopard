var should = require('chai').should(),
    camelopard = require('../index'),
    addCameraConfiguration = camelopard.addCameraConfiguration,
    getCameraConfiguration = camelopard.getCameraConfiguration,
    image = camelopard.image;


describe('#getCameraConfiguration', function() {
  it('default camera should be set', function() {
  	var defaultCam = getCameraConfiguration();
    defaultCam.ip.should.equal('192.168.0.90');
    defaultCam.brand.should.equal('Axis');
  });
});

describe('#addCameraConfiguration', function() {
  it('adding a camera should override default camera', function() {
  	var cam = addCameraConfiguration('MyBrand', '127.0.0.1', 'admin', '12345');
    cam.ip.should.equal('127.0.0.1');
    cam.brand.should.equal('MyBrand');
  });
});

describe('#api object image', function() {
  it('should exist', function() {
    image.should.not.equal(null);
  });
});