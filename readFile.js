var fs = require('fs')

var fileName = process.argv[2]
fs.readFile(fileName, function(err, data){
  console.log(data.toString().split('\n').length - 1)
})


