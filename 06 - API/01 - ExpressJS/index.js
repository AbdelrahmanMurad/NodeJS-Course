//require
const http = require('http');
const express = require('express');

//initialize تعريف
const app = express();
const server = http.createServer(app);// => start application
// const server = http.createServer();// => start project => false

const port = 1000;
// http://localhost/1000
server.listen(port, () => console.log(`server ${port} is running now`));
// it will load

/**
 1- require http & express
 2- initialize app by express
 3- createServer by app
 4- server.listen
 */

// old way
// http
// const http = require('http');
// // http.createServer
// const server = http.createServer((req, res) => res.end('start server'));
// // server.listen
// server.listen(2020, () => console.log('serve 2020'));
// // http://localhost:2020/