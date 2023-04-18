var http = require('http');
var dt = require('./meumodelo');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end();
}).listen(2020);