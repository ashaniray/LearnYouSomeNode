var net = require('net')

var port = process.argv[2]


var server = net.createServer(function(socket){
  var date = new Date();
  var str = date.getFullYear() + '-'
  + ('0' + (Number(date.getMonth()) + 1)).slice(-2) + '-'
  + ('0' + date.getDate()).slice(-2) + ' '
  + date.getHours() + ':'
  + date. getMinutes();

  socket.end(str);
}).listen(port)

