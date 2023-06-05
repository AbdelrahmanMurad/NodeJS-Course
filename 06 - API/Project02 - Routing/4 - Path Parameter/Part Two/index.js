const http = require('http');

const app = require('./app');

const server = http.createServer(app);

const port = 3000;
//http://localhost:8000
server.listen(port, () => console.log(`server ${port} is running`));