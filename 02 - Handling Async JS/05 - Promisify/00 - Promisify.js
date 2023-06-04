const { readFile } = require('fs')
const { promisify } = require('util')

//1
readFile('./data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log(data)
    console.log('--------------------------------');
})

//2
const promisifyReadFile = promisify(readFile);

promisifyReadFile('./data.txt', 'utf8')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err.message)
    })

//reading file by .then().catch() without arrow function.