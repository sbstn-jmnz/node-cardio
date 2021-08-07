const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  setTimeout(() => {
    res.end("World\n");
  }, 3000);
  
  res.write("Hello\n")
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});