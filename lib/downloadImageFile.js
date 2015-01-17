var config = {
image: {
    resolution: '640x480',
    camera: '1',
    compression: '30', // 0-100
    rotation: '0',
    squarepixel: '0'
  },
  file: {
    baseFolder: 'files',
    folder: 'images',
    prefix: 'image',
    extension: '.jpg'
  }
},

getFileName = function () {
  return config.file.prefix + '_' + new Date().getTime() + config.file.extension;
},

getDownloadPath = function () {
  return this.config.file.baseFolder + '/' + this.config.file.folder;
},

getUrl = function () {
  return 'http://' +
    config.camera.username + ':' +
    config.camera.password + '@' +
    config.camera.ip +
    '/axis-cgi/jpg/image.cgi?' +
    'resolution=' + config.image.resolution + '&' +
    'camera=' + config.image.camera + '&' +
    'compression=' + config.image.compression + '&' +
    'rotation=' + config.image.rotation + '&' +
    'squarepixel=' + config.image.squarepixel;
},

download = function(callback){
  var path = getDownloadPath();
  var url = getUrl();
  var fr;
  mkdirp(path, function (err) {
    if(err !== null) { console.log('error:' + err);}
  });
  fr = fs.createWriteStream(path + '/' + fileName);
  console.log('Downloading image from: ' + url);
    request
    .get(url)
    .on('error', function (err) {
      console.log('error:' + err);
    })
    .pipe(fr);
    fr.on('finish', function () {
      callback();
    });
}

module.exports = {
  config: config,
  getFileName: getFileName,
  getUrl: getUrl,
  getDownloadPath: getDownloadPath,
  download: download
}