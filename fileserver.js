var http = require('http')
var fs = require('fs')

http.createServer(function(req, resp){
  fs.createReadStream(process.argv[3])
    .pipe(resp)
}).listen(process.argv[2])

