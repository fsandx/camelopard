# Camelopard

![alt tag](https://github.com/fsandx/camelopard/blob/master/assets/camelopard.png)

Camelopard is an IP camera toolbox for Nodejs.

Currently Camelopard only supports a few methods for controlling an Axis IP camera.

More control commands and brands will be added in the near future.

All contributions are welcome!


## Installation

npm install camelopard

## Usage

 ```JavaScript
var camelopard = require('camelopard');
console.log(camelopard.downloadImage());
 ```

 (See camelopard-demo.js in the demo subfolder)

## Tests

  npm test

## Release History

* 0.1.1 Improving documentation, structure and testability
* 0.1.0 Initial release
