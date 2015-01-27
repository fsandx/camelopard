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
var fs            = require('fs'),
    request       = require('request'),
    mkdirp        = require('mkdirp'),
    baseService   = require('../util/baseService.js'),
    imageService  = 'axis-cgi/jpg/image.cgi';

var getFileName = function (cameraConfiguration) {
  var prefix = '';
  if (cameraConfiguration !== undefined) {
    if (cameraConfiguration.id !== undefined) {
      prefix = cameraConfiguration.id + '_';
    }
  }
  return prefix + new Date().getTime() + '.jpg';
};

var getDownloadPath = function (cameraConfiguration) {
  return cameraConfiguration.snapshot.downloadFolder;
};

var getDownloadUrl = function (cameraConfiguration) {
  var params = cameraConfiguration.snapshot;
  var url = baseService.getBaseUrl(cameraConfiguration) + '/' +
    imageService + '?' +
    'resolution=' + params.resolution + '&' +
    'camera=' + params.cameraNum + '&' +
    'compression=' + params.compression + '&' +
    'rotation=' + params.rotation + '&' +
    'squarepixel=0';
  return url;
};

var download = function (cameraConfiguration, callback){
  var path = getDownloadPath(cameraConfiguration);
  var url = getDownloadUrl(cameraConfiguration);
  var fileName = getFileName(cameraConfiguration);
  var fr;

  mkdirp(path, function (err) {
    if (err !== null) { callback(err); }
  });
  fr = fs.createWriteStream(path + '/' + fileName);
  console.log('Downloading image from: ' + url);
    request
      .get(url)
      .auth(cameraConfiguration.username, cameraConfiguration.password, false)
      .on('error', function (err) {
        callback(err);
      })
      .pipe(fr);
    fr.on('finish', function () {
      callback(undefined, path + '/' + fileName);
    });
};

module.exports = {
  getFileName: getFileName,
  getDownloadUrl: getDownloadUrl,
  getDownloadPath: getDownloadPath,
  download: download
};