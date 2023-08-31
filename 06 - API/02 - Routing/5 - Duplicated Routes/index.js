const http = require('http');

const app = require('./app');

const server = http.createServer(app);

const port = 2000;
//http://localhost:2000
server.listen(port, () => console.log(`server ${port} is running`));