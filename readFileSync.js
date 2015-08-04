var fs = require('fs')

var fileName = process.argv[2]
count = fs.readFileSync(fileName)
  .toString()
  .split('\n')
  .length - 1

console.log(count)  

