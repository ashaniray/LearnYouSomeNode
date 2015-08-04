var mymodule = require('./mymodule.js')



var dirPath = process.argv[2]
var extn = process.argv[3]

mymodule(dirPath, extn, function(err, files){
  if (err) {
    console.log(err);
    return;
  }
  files.forEach(function(file){
    console.log(file)
  })
})

