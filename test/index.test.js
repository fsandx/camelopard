var should = require('chai').should(),
    _ = require('lodash'),
    camelopard = require('../index'),
    addCameraConfiguration = camelopard.addCameraConfiguration,
    removeCameraConfigurationByName = camelopard.removeCameraConfigurationByName,
    getCameraConfiguration = camelopard.getCameraConfiguration,
    image = camelopard.image;

var testConfigs = [
  {
    name: 'test1',
    brand: 'MyBrandA',
    ip: '127.0.0.1',
    username: 'root',
    pass: 'pass'
  },
  {
    name: 'test1',
    brand: 'MyBrandB',
    ip: '127.0.0.1',
    username: 'root',
    pass: 'pass'
  },
  {
    name: 'test2',
    brand: 'MyBrandC',
    ip: '127.0.0.2',
    username: 'root',
    pass: 'pass'
  }
];

describe('#index', function() {

  /*
  beforeEach(function(){
    camelopard.cameraConfigurations = [];
  });*/

  describe('#getCameraConfigurations', function() {
    it('should be able to access the list of configurations', function() {
      _.isArray(camelopard.getCameraConfigurations()).should.equal(true); 
    });
  });

  describe('#removeAllCameraConfigurations', function() {
    it('should be able remove all configurations from the list', function() {
      camelopard.removeAllCameraConfigurations();
      camelopard.getCameraConfigurations().length.should.equal(0); 
    });
  });

  describe('#addCameraConfiguration', function() {
    it('should be able to add a camera to the list', function() {
      camelopard.removeAllCameraConfigurations();
      var id = addCameraConfiguration(testConfigs[0]);
      _.isUndefined(id).should.equal(false);
      camelopard.getCameraConfigurations().length.should.equal(1);
      
    });
  });

  describe('#addCameraConfigurations', function() {
    it('should be able to add a list of cameras', function() {
      camelopard.removeAllCameraConfigurations();
      camelopard.addCameraConfigurations(testConfigs);
      camelopard.getCameraConfigurations().length.should.equal(3);
    });
  });

  //getCameraConfigurationById:
  describe('#getCameraConfigurationById', function() {
    it('should be able to return a camera with the id - if it exists', function() {
      camelopard.removeAllCameraConfigurations();
      camelopard.addCameraConfigurations([testConfigs[0], testConfigs[1]]);
      var id = addCameraConfiguration(testConfigs[2]);
      var cams = camelopard.getCameraConfigurations();
      var cam = camelopard.getCameraConfigurationById(id);
      cam.id.should.equal(id);
      cam = camelopard.getCameraConfigurationById('xxxxx');
      _.isUndefined(cam).should.equal(true);
    });
  });

  //getCameraConfigurationById:
  describe('#getCameraConfigurationsByName', function() {
    it('should be able to return a list of cameras with the given name', function() {
      camelopard.removeAllCameraConfigurations();
      camelopard.addCameraConfigurations(testConfigs);
      var cams = camelopard.getCameraConfigurationsByName('test1');
      cams.length.should.equal(2);
      cams = camelopard.getCameraConfigurationsByName('test2');
      cams.length.should.equal(1);
      cams = camelopard.getCameraConfigurationsByName('xxx');
      cams.length.should.equal(0);
    });
  });

  describe('#removeCameraConfigurationByName', function() {
    it('should be able to remove an existing camera from the list ', function() {
      camelopard.removeAllCameraConfigurations();
      camelopard.addCameraConfigurations(testConfigs);
      camelopard.removeCameraConfigurationByName('test2');
      camelopard.getCameraConfigurations().length.should.equal(2);
      camelopard.removeCameraConfigurationByName('test1');
      camelopard.getCameraConfigurations().length.should.equal(0);
    });
  });

  describe('#removeCameraConfigurationByid', function() {
    it('should be able to remove an existing camera from the list ', function() {
      camelopard.removeAllCameraConfigurations();
      camelopard.addCameraConfigurations(testConfigs);
      var id = camelopard.getCameraConfigurations()[0].id;
      camelopard.removeCameraConfigurationById(id);
      camelopard.getCameraConfigurations().length.should.equal(2);
    });
  });

  describe('#api object image', function() {
    it('should exist', function() {
      image.should.not.equal(null);
    });
  });
});