// Write a node.JS program that execute a connection to server and return success message like "Success, i'm listening from port: 3000"

var http = require('http')

var server = http.createServer()
var PORT = process.env.PORT || 3000
var counter = 0

server.on('request', function(req, res){
  console.log('request number ' + (++counter) );
  res.end('request received...')
})

server.listen(PORT, function() {
  console.log('server is listening on PORT '+ PORT);
})