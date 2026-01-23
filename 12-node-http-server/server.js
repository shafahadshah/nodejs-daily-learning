const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const htmlPath = path.join(__dirname, 'index.html');
    const html = fs.readFileSync(htmlPath);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);

  } else if (req.url === '/api' && req.method === 'GET') {
    const jsonPath = path.join(__dirname, 'data.json');
    const data = fs.readFileSync(jsonPath);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
