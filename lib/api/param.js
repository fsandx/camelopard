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

/* API Reference: http://www.axis.com/files/manuals/vapix_ptz_52933_en_1307.pdf */

/*globals require */
var baseService = require('../util/baseService'),
    _           = require('lodash');

var listAll = function (cameraConfiguration, callback) {
  if (!_.isUndefined(cameraConfiguration)) {
    var serviceUrl = 'axis-cgi/param.cgi?action=list&responseformat=rfc&responsecharset=utf8';
    baseService.call(cameraConfiguration, serviceUrl, function (err, res, body) {
        if (!_.isUndefined(callback)) { callback(err, res, body); }
      });
  } else {
    throw new Error('Argument error in listAll!');
  }
};

var modify = function (cameraConfiguration, params, callback) {
  if (!_.isUndefined(cameraConfiguration) && 
      !_.isUndefined(params) &&
      !_.isUndefined(params[0].key) && 
      !_.isUndefined(params[0].value)) {
    var serviceUrl = 'axis-cgi/param.cgi?action=update&' + params[0].key + '=' + params[0].value;
    baseService.call(cameraConfiguration, serviceUrl, function (err, res, body) {
        if (!_.isUndefined(callback)) { callback(err, res, body); }
      });
  } else {
    throw new Error('Argument error in modifyParameter!');
  }
};

module.exports = {
    listAll: listAll,
    modify: modify
  };