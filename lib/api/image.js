/*

This file is a part of Camelopard, which is an
IP camera toolbox package for Nodejs.

The MIT License (MIT)

Copyright (c) 2015 Fredrik Sandberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*globals require */
var fs = require('fs');
var request = require('request');
var mkdirp = require('mkdirp');

var config = {
  parameters: {
    resolution: '640x480',
    camera: '1',
    compression: '30', // 0-100
    rotation: '0',
    squarepixel: '0'
  },
  file: {
    baseFolder: 'files',
    folder: 'images',
    extension: '.jpg'
  }
},

getFileName = function (cameraConfig) {
  var prefix = '';
  if (cameraConfig !== undefined) {
    if (cameraConfig.id !== undefined) {
      prefix = cameraConfig.id + '_';
    }
  }
  return prefix + new Date().getTime() + config.file.extension;
},

getDownloadPath = function () {
  return config.file.baseFolder + '/' + config.file.folder;
},

getDownloadUrl = function (cameraConfig) {
  return 'http://' +
    cameraConfig.ip +
    '/axis-cgi/jpg/image.cgi?' +
    'resolution=' + config.parameters.resolution + '&' +
    'camera=' + config.parameters.camera + '&' +
    'compression=' + config.parameters.compression + '&' +
    'rotation=' + config.parameters.rotation + '&' +
    'squarepixel=' + config.parameters.squarepixel;
},

download = function(cameraConfig, callback){
  var path = getDownloadPath();
  var url = getDownloadUrl(cameraConfig);
  var fileName = getFileName(cameraConfig);
  var fr;

  mkdirp(path, function (err) {
    if (err !== null) { callback(err); }
  });
  fr = fs.createWriteStream(path + '/' + fileName);
  console.log('Downloading image from: ' + url);
    request
      .get(url)
      .auth(cameraConfig.username, cameraConfig.password, false)
      .on('error', function (err) {
        callback(err);
      })
      .pipe(fr);
    fr.on('finish', function () {
      callback(undefined, path + '/' + fileName);
    });
}

module.exports = {
  config: config,
  getFileName: getFileName,
  getDownloadUrl: getDownloadUrl,
  getDownloadPath: getDownloadPath,
  download: download
}