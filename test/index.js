var should = require('chai').should(),
    camelopard = require('../index'),
    addDevice = camelopard.addDevice,
    getDevice = camelopard.getDevice,
    getDownloadImageFileName = camelopard.getDownloadImageFileName,
    getDownloadImageUrl = camelopard.getDownloadImageUrl;


describe('#getDevice', function() {
  it('default camera should be set', function() {
  	var defaultCam = getDevice();
    defaultCam.ip.should.equal('192.168.0.90');
    defaultCam.brand.should.equal('Axis');
  });
});

describe('#addDevice', function() {
  it('adding a camera should override default camera', function() {
  	var cam = addDevice('MyBrand', '127.0.0.1', 'admin', '12345');
    cam.ip.should.equal('127.0.0.1');
    cam.brand.should.equal('MyBrand');
  });
});

describe('#getDownloadImageFileName', function() {
 //TODO: Add tests
});

describe('#getDownloadImageFileName', function() {
	// TODO: Add tests
});