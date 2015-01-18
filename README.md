# Camelopard

![alt tag](https://github.com/fsandx/camelopard/blob/master/assets/camelopard.png)

Camelopard is an IP camera toolbox for Nodejs.

Currently Camelopard only supports a few methods for controlling an Axis IP camera, but it is easy to add new functionality.

More control commands and ip camera brands will be added in the near future.

All contributions are welcome!


## Installation

npm install camelopard

## Example
Download image:
 ```JavaScript
var camelopard = require('camelopard');
var myConfig = {brand: 'Axis', ip: '192.168.1.68', username: 'camelopard', password: 'pass'};
camelopard.image.download(myConfig, function (err) {
	if (err !== undefined) {console.log('Error!' + err)}
	else {console.log('Image file downloaded!')}
});
 ```

 (See camelopard-demo.js in the demo subfolder)

## Tests

  npm test

## Release History

* 0.2.1 Fixes for Image object
* 0.1.3 Changing camera configuration method names, improvements of documentation
* 0.1.2 Further improvements of structure, more tests
* 0.1.1 Improving documentation, structure and testability
* 0.1.0 Initial release
