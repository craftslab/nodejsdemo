const http = require('http');

const host = process.env.HOST;
const port = Number(process.env.PORT);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');

  console.log(req.rawHeaders);
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
