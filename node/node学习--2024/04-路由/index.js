const route = require('./route');
const api = require('./api');
const server = require('./server');

server.use(route);
server.use(api);
server.start();
