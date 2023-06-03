const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const port = 5050;
//http://localhost:5050
server.listen(port, () => {
    console.log(`port ${port} is listening now...`);
});