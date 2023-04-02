const http = require('http')//http dependency

const port = 9090


/**
 * simulate an error
 * and stop the process
 */
const someError = false;

if (someError) {
    process.exit(1);
}


/**
 * create Node.js http server with handling multi urls
 */
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.end(`
                <html>
                    <head>
                        <title>My first page</title>
                    </head>
                    <body>
                        <h1>Welcome to my node application</h1>
                    </body>
                </html>
            `);
            break;
        case '/user':
            res.end('User page, welcome');
            break;
        case '/admin':
            res.end('Employee good morning');
            break;
        default:    // not defined url
            res.end('Page not found');
            break;
    }
});

/**
 * listen to requests
 */
server.listen(port, () => {
    console.log(`server is now listening on port ${port}`)
})

//http://localhost:9090

/**Notes:
 * 1- To Write html inside response => use backticks ` html code `.
 * 2- How to use the multi urls ?? how to handle that ??
 *      - the url comes from request parameter, you will make a switch\case as shown above.
 * 3- Somtimes there will be a problem (Error) maybe: db connection not found, server is broked, full of data, port number is Reserved. 
 *      So you need to check if threre is an error before starts the server.
 *      => if true =>  exit(0) => the operation ends successfully.
 *      => if false => exit(1) number != 0 => stops the server. because of this error. (Simulation)
 */

