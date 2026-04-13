const http = require('http');
const PORT = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', service: process.env.SERVICE_NAME || 'app' }));
}).listen(PORT, () => console.log(`Listening on ${PORT}`));
