# Camelopard

<img src="https://raw.githubusercontent.com/fsandx/camelopard/master/assets/camelopard.png">

Camelopard is an IP camera toolbox for Nodejs.

Currently Camelopard only supports a couple of the most common API objects (like image, ptz, parameters) for controlling an Axis IP camera, but more control commands will be added in the near future.

All contributions are welcome!


## Installation

npm install camelopard

## Example
Small demo applications can be found here: https://github.com/fsandx/camelopard-keeper

Below is an example of how to capture and download a snapshot from two different cameras at the same time:
 ```JavaScript
var camelopard  = require('camelopard'),
    _           = require('lodash');

var data = {
  "cameras": [
    {
      "name": "A-Building",
      "brand": "Axis",
      "ip": "192.168.0.150", 
      "username": "root",
      "password": "pass",
      "snapshot": {
        "resolution": "1024x768",
        "compression": 30,
        "rotation": 0,
        "cameraNum": 1,
        "downloadFolder": "files\/snapshots"
      }
    },
    {
      "name": "B-Building",
      "brand": "Axis",
      "ip": "192.168.0.200", 
      "username": "root",
      "password": "pass",
      "snapshot": {
        "resolution": "1024x768",
        "compression": 30,
        "rotation": 0,
        "cameraNum": 1,
        "downloadFolder": "files\/snapshots"
      }
    }
  ]
};
var cams = data.cameras;

_.forEach(cams, function (conf) {
  camelopard.image.download(conf, function (err, res) {

    if (err !== undefined) {
      console.log('Error!' + err);
    } else {
      console.log('Image file downloaded as: ' + res);
    }
  });
});
 ```

## Tests

  npm test

## Release History

* 0.6.0 Basic parameters API object added
* 0.5.0 New JSON data structure
* 0.4.0 Basic PTZ API object added
* 0.3.1 Fix for HTTP authentication
* 0.3.0 Methods for multiple cameras support
* 0.2.2 License changed to MIT
* 0.2.1 Fixes for Image object
* 0.1.3 Changing camera configuration method names, improvements of documentation
* 0.1.2 Further improvements of structure, more tests
* 0.1.1 Improving documentation, structure and testability
* 0.1.0 Initial release
