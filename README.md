# Camelopard

<img src="https://github.com/fsandx/camelopard/blob/master/assets/camelopard.png">

Camelopard is an IP camera toolbox for Nodejs.

Currently Camelopard only supports a few methods for controlling an Axis IP camera, but it is easy to add new functionality. 

More control commands will be added in the near future.

All contributions are welcome!


## Installation

npm install camelopard

## Example
Download snapshot from several cameras at the same time:
 ```JavaScript
var camelopard = require('camelopard');
var _ = require('lodash');

camelopard.addCameraConfiguration({name: 'MycamA', brand: 'Axis', ip: '192.168.0.200', username: 'root', password: 'pass'});
camelopard.addCameraConfiguration({name: 'MycamB', brand: 'Axis', ip: '192.168.0.150', username: 'root', password: 'pass'});
camelopard.addCameraConfiguration({name: 'MycamV', brand: 'Axis', ip: '192.168.0.120', username: 'root', password: 'pass'});
var cams = camelopard.getCameraConfigurations();

_.forEach(cams, function (conf) {
    camelopard.image.download(conf, function (err, res) {
      if (err !== undefined) {
        console.log('Error!' + err)
      } else {
        console.log('Image file downloaded as: ' + res);
      }
  })
})
 ```

## Tests

  npm test

## Release History

* 0.4.0 Basic PTZ API object added
* 0.3.1 Fix for HTTP authentication
* 0.3.0 Methods for multiple cameras support
* 0.2.2 License changed to MIT
* 0.2.1 Fixes for Image object
* 0.1.3 Changing camera configuration method names, improvements of documentation
* 0.1.2 Further improvements of structure, more tests
* 0.1.1 Improving documentation, structure and testability
* 0.1.0 Initial release
