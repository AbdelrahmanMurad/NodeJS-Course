/* \\code with details.
*\\(1) import server dependancie
const http = require('http'); 

*\\(2) create http server => createServer() returns server.
\\  createServer() has 2 parameters of callback function (request, response) 
const server = http.createServer((req, res) => {
res.end('Welcome, Server started');
\\.end() => end point
});

const port = 5050; \\انت حر في اختيار الرقم
\\parameterممكن مباشرة في ال

*\\(3) identify port in listen(portNumber, callBackFunction() بتشتغل لما السيرفر يشتغل)
\\  listen() has 2 parameters (portNumber & callbackFunction()) 
server.listen(port, () => {
console.log(`server is now listening on port ${port}`);
})
*/

//import server
const http = require('http');

//create server
const server = http.createServer((req, res) => {
    res.end(`welcome to my first server`);
});

//identify port by listen()
const port = 5053;
server.listen(port, () => {
    console.log(`this server is now listening on port ${port}`);
});


// http://localhost:5053 => try open it, it will load.

/** Notes:
 * 1- Any Web Application should work on server.
 *      a- To run a web application, we need a server. 
 *      b- Server: applicationاداة او برنامج منفصل عن ال - like: apache in php.
 *      c- Server in php: بشتغل بشكل مستقل
 *      d- Server in node: Node.js بتيجي وبتشتغل مع ال
 *      e- Server name for Node.js: http (request-response)  
 *      f- So, when you download the nodes.js, you will download the server with it. not independent like php.
 *      g- php => server is independent - not with application. (apache)
 *      h- Node.js => server is not independent - with application. (http dependancie)
 * 2- When you run the code above, try to run again you will notice that the server did not stoped,
 *     so, when you start the server, it will not pause itself.
 * ---------------------------------------------
 * 3- Steps to create a server:
 *          1- import server by require().
 *          2- create server by createServer().
 *                  - return something 
 *          3- identify the port server by listen().
 * ---------------------------------------------
 * 4- how to run in terminal for node(bash): node pageName 
 *      -- if name has spaces, use "". 
 */