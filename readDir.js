var fs = require('fs')

var dirPath = process.argv[2]
var extn = '.' + process.argv[3]

fs.readdir(dirPath, function(err, files){
  files.filter(function(file){
    return file.substr(file.length - extn.length) === extn
  })
  .forEach(function(file){
    console.log(file)
  })
})

