# Camelopard

![alt tag](https://github.com/fsandx/camelopard/blob/master/assets/camelopard.png)

Camelopard is an IP camera toolbox for Nodejs.

Currently Camelopard only supports a few methods for controlling an Axis IP camera, but it is easy to add new functionality.

More control commands and ip camera brands will be added in the near future.

All contributions are welcome!


## Installation

npm install camelopard

## Usage
Download image:
 ```JavaScript
var camelopard = require('camelopard');
var defaultConfig = camelopard.getCameraConfiguration();
camelopard.image.download(defaultConfig, function (err) {
	if (err !== null) {console.log('Error!')}
	else {console.log('Image file downloaded!')}
});
 ```

 (See camelopard-demo.js in the demo subfolder)

## Tests

  npm test

## Release History

* 0.1.3 Changing camera configuration method names, improvements of documentation
* 0.1.2 Further improvements of structure, more tests
* 0.1.1 Improving documentation, structure and testability
* 0.1.0 Initial release
