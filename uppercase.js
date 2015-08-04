var map = require('through2-map')
var http = require('http')

http.createServer(function(req, resp){
  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase()
  })).pipe(resp)
}).listen(process.argv[2])



