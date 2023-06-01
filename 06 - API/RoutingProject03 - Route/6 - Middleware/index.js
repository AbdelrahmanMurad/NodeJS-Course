const http = require('http');

const app = require('./app');

const server = http.createServer(app);

const port = 2020;
//http://localhost:2020
server.listen(port, () => console.log(`server ${port} is running`));