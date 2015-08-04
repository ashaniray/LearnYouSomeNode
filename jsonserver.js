
var map = require('through2-map')
var http = require('http')
var url = require('url')

function unixtime(time) {
  return { unixtime : time.getTime() }
}


function parsetime(time) {
  return  { 
          hour: time.getHours(), 
          minute: time.getMinutes(),
          second: time.getSeconds() 
          }
}

http.createServer(function(req, resp){
  var urlObj = url.parse(req.url, true)
  var path = urlObj.path
  var time = new Date(urlObj.query.iso)

  var result;
  switch(true) {
    case   (/^\/api\/parsetime/.test(path)):
      result = parsetime(time)
      break;
    case (/^\/api\/unixtime/.test(path)):
      result = unixtime(time)
      break;
  }

  resp.writeHead(200, { 'Content-Type': 'application/json' })
  return resp.end(JSON.stringify(result))

}).listen(process.argv[2])


