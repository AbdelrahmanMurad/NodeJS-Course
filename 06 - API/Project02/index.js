const http = require('http');
const app = require('./app.js');

const server = http.createServer(app);

const port = 1000;

server.listen(port, console.log(`server ${port} is running now`));