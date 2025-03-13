const express = require('express');
const routes = require('./routes');

const app = express();

//TODO: (3) continue
//Handling all promises in one time.
// process is a global variable
// action => unhandledRejection => means: error that dont have handle, so this action will handle it instead.
// catch the promises that dont have catch
process.on('unhandledRejection', (reason) => {
    console.log(reason);
    process.exit(1);
    // num!=0 => Process is done with Fail.
    // 0 => Prpcess is done with Success.
});

routes(app);

module.exports = app;