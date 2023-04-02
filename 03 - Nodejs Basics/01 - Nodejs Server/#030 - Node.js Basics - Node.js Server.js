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
server.listen(port, () => {
    console.log(`server is now listening on port ${port}`);
})
*/

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Welcome, Server started');
});

const port = 5050;

server.listen(port, () => {
    console.log(`server is now listening on port ${port}`);
})


// http://localhost:5050 => try open it, it will load.

/** Notes:
 * 1- Any Web Application should work on server.
 * 2- To run, we need a server. 
 * 3- Server: applicationاداة او برنامج منفصلة عن ال - like: apache in php.
 * 4- Server: بشتغل بشكل مستقل (PHP)
 * 5- Node.js بتشتغل مع Server خاص فيها 
 * 6- Server: Node.js بتيجي مع ال(Node.js)
 * 7- Server name for Node.js: http (request-response)  
 * 8- So, when you download the nodes.js, you will download the server with it. not independent not independent like php.
 * 9- php => server is independent - not with application. (apache)
 * 10- Node.js => server is not independent - with application. (http dependancie)
 * 11- When you run the code you took above, try to run again you will notice that the server did not stoped,
 *     so, when you start the server, it will not pause itself.
 * ---------------------------------------------
 * Steps to create a server:
 * 1- import server by require().
 * 2- create server by createServer().
 *      - return something 
 * 3- identify the port server by listen().
 */