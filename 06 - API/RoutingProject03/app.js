const express = require('express');

const app = express();

//Anything about Backend, need to be called by app. because app calls express.
//now we need to create route(link), from where?? from app(express)
//.get('link','data(callBack(req, res, next))');
app.get('/student', (req, res, next) => {
    //*route needs to be start with forward slash /.
    res.send('<h3>Welcome to Student Page</h3>');
    //http://localhost:3000/student
});

app.get('/', (req, res, next) => {
    // res.redirect('/student'); //?same as: res.send('<h3>Welcome to Student Page</h3>');
    res.send('<h1>Welcome to Home Page</h1>');
})

/**
 * requst: req for reciving, reception, pickup, read data.
 * 
 * response: res for send, post data.
 *  res.send('htmlContent');
 *    ss
 */


// if you updated the code, you need to reconnect your server.


module.exports = app; 