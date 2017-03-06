// cargar modulo http
const http = require('http');

// crear un web server que responde "Hello Server" a todos los requests.
var server = http.createServer(function (req, res) {
  let data = '';

  req.on('data', function(chunk) {
    data += chunk;
    console.log('chunk', chunk);
  });

  req.on('end', function(a, b) {
    console.log('data', data);
  });

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Server!');
});

// attachar el servidor al puerto 8000
server.listen(8000);

console.log('Server running at :8000');
