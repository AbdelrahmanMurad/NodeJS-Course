/*Introduction to Real-Time Communication

- Request-Response Model (Traditional):
    - Used for basic client-server interactions.
    - Characteristics:
        1. Two separate sides: Sender and Receiver.
        2. The connection closes after the response is sent.
        3. Example: Regular HTTP requests.
- Real-Time Communication:
    - Used for simultaneous, bidirectional interactions (e.g., chatting apps, live updates).
    - Characteristics:
        1. Sender and Receiver operate at the same time.
        2. Connection remains open.
        3. Example: WhatsApp, Live Notifications, Multiplayer Games.

Socket Overview:

- A socket is a duplex stream (can read and write data simultaneously).
- Commonly used for real-time applications.
- Node.js supports real-time communication, while traditional tools like PHP do not.



Socket Communication: Client ↔ Server

Steps:

1. A socket is created automatically when a connection is established between the client and server.
2. The server listens for the connection event and handles it using a socket object.

Example: Socket Between Client and Server
*/


// Importing and creating the HTTP server
const { createServer } = require('http');
const server = createServer(); // Create an HTTP server instance

// Server listens on port 5000
server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

// Listening for client connections
server.on('connection', (socket) => {
    // 'connection' event is triggered when a client connects.
    // A socket object is returned, representing the client-server communication.

    console.log('New connection established:');
    console.log(socket); // Prints details of the socket connection
});

/*
Key Notes:

1. Socket Creation:
    - A socket is created automatically once a connection is established.
    - This allows real-time communication.
2. Node.js Advantage:
    - Node.js supports real-time communication, unlike PHP, which focuses on traditional request-response cycles.
3. EventEmitter Extension:
    - The `Server` in Node.js extends the EventEmitter class, allowing it to:
        - Emit events (`connection`, `request`, etc.).
        - Handle events using listeners.



This example demonstrates how Node.js makes real-time communication efficient and seamless by leveraging sockets and maintaining open connections.
*/