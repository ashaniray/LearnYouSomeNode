
var bl = require('bl')
var http = require('http')


var resp = []
var count = 0



function fetchUrl(i) {
  var url = process.argv[2+i]
  http.get(url, function(response){
    response.pipe(bl(function (err, data){
      if (err)
        return console.error(err)
      resp[i] = data.toString() 
      count++;
      if (count === 3) {
          for (index in resp)
            console.log(resp[index])
        }
    }))
  })
}

[0,1,2].forEach(fetchUrl)

