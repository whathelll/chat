var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World and something else\n');
}).listen(8080);




console.log('Server running at http://127.0.0.1:8080/');