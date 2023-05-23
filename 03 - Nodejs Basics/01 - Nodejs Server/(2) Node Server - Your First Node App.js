//import server
const http = require('http');

/**
 * simulate an error
 * and stop the process
 */
const someError = true;

// if (someError) {
if (!someError) {
    // process.exit(0);
    process.exit(1);
}

/**
 * create Node.js http server with handling multi urls
 */
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.end(
                `
               <html>
               <head>
                   <title>My Server</title>
               </head>
               <body>
                   <h1>Welcome to my server</h1>
                   <hr />
                   <p>choose path: </p>
                   <ol>
                       <li>/user</li>
                       <li>/admin</li>
                       <li>/employee</li>
                   </ol>
               </body>
           </html>
               `
            );
            break;
        case '/user':
            res.end('welcome user');
            break;
        case '/admin':
            res.end('welcome admin');
            break;
        case '/employee':
            res.end('welcome employee');
            break;
        default:  // not defined url
            res.end('Page Not Found - 404');
            break;
    }
});

/**
 * listen to requests
 */
server.listen(9090, () => console.log(`server is listining at port 9090`));


//http://localhost:9090

/**Notes:
 * 1- To Write html inside response => use backticks ` html code `.
 * 2- How to use the multi urls ?? how to handle that ??
 *      - the url comes from request parameter, you will make a switch\case as shown above.
 * 3- Somtimes there will be a problem (Error) maybe: db connection not found, server is broked, full of data, port number is Reserved. 
 *      So you need to check if threre is an error before starts the server.
 *      => if true =>  exit(0) => the operation ends successfully.
 *      => if false => exit(n) (n != 0) => stops the server. because of this error. (Simulation)
 */

