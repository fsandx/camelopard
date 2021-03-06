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

/*globals require, module */

var _     = require('lodash'),
    image = require('./lib/api/image.js'),
    ptz   = require('./lib/api/ptz.js'),
    param   = require('./lib/api/param.js'),
    data  = require('./data.json');

var cameraConfigurations = [];

module.exports = {

  addCameraConfiguration: function (cameraConfiguration) {
    var id = _.uniqueId();
    cameraConfiguration.id = id;
    cameraConfigurations.push(cameraConfiguration);
    return id;
  },

  addCameraConfigurations: function (cameraConfigurations) {
    _.forEach(cameraConfigurations, this.addCameraConfiguration);
  },

  getCameraConfigurations: function () {
    return cameraConfigurations;
  },

  getCameraConfigurationById: function (id) {
    return _.where(cameraConfigurations, {id: id})[0];
  },

  getCameraConfigurationsByName: function (name) {
    return _.where(cameraConfigurations, {name: name});
  },

  removeCameraConfigurationByName: function (name) {
    _.remove(cameraConfigurations, function (config) {
      return config.name === name;
    });
  },

  removeCameraConfigurationById: function (id) {
    _.remove(cameraConfigurations, function (config) {
      return config.id === id;
    });
  },

  removeAllCameraConfigurations: function () {
    cameraConfigurations = [];
  },

  // Exposing objects
  data: data,

  // API objects
  image: image,
  ptz: ptz,
  param: param,

};