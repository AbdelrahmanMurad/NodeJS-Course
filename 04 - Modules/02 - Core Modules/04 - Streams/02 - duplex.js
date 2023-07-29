/** Introduction
 * - In real-time we will not use request-reponse, we use instead socket between client and server. 
 *      - Request-Reponse: Two sides. 
 *              - Sneder & Receiver in different circle.
 *              - connection will close.
 *      - Real-Time: One Side. (In the same Time)
 *              - Sneder & Receiver in the same circle.
 *              - connection still opened.
 *              - WhatsApp, etc...
 * - Real-Time like chatting application.
 * - Socket => duplex stream. 
 * - Socket used for real-time at most.
 * - Node.js Supports realtime, php not.
 */

// an example for socket between client and server

//importing & creating server
const { createServer } = require('http')
const server = createServer();

//http://localhost:5000
server.listen(5000)

server.on('connection', (socket) => {
    //connection type of events server.
    //connection return socket.
    //socketبتم انشاء ال connectionاول ما يصير 
    console.log(socket);
    //It will print the socket between the client and server.
})

//Note: Server extends from Event Emmitter.