const http = require('http');
const fs = require('fs');
const path = require('path');
const Router = require('./router/router');

const routes = JSON.parse(fs.readFileSync(path.join(__dirname, 'router', 'routes.json'), {
    encoding: 'utf-8',
  }),
);

const server = http.createServer((req, res) => new Router(req, res, routes));

const port = 3000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port: ${port}`);
});
