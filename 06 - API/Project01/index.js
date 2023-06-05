//require
const http = require('http');
const express = require('express');

//initialize تعريف
const app = express();
const server = http.createServer(app);// => start application
// const server = http.createServer();// => start project (false )

const port = 1000;

server.listen(port, () => console.log(`server ${port} is running now`));