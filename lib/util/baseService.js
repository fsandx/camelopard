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

var fs = require('fs');
var request = require('request');

var getBaseUrl = function (cameraConfiguration) {
    return 'http://' + cameraConfiguration.ip;
};

var call = function(cameraConfiguration, serviceUrl, callback){
    var url = getBaseUrl(cameraConfiguration) + '/' + serviceUrl;
    console.log('Calling url: ' + url);
    request
        .get(url)
        .auth(cameraConfiguration.username, cameraConfiguration.password, false)
        .on('error', function (err) {
            callback(err);
        })
        .on('response', function(response) {
            callback(undefined, response);
        });
}

module.exports = {
    getBaseUrl: getBaseUrl,
    call: call
}