var fs = require('fs')

module.exports = readdir;


function readdir(dirPath, extn, callback)  {
  var extnWithDot = '.' + extn
  var fileList = fs.readdir(dirPath, function(err, files){
    if (err) {
      callback(err);
      return
    }
    var filteredFiles = files.filter(function(file){
      return file.substr(file.length - extnWithDot.length) === extnWithDot
    })
    callback(null, filteredFiles);
    return
  })
}

