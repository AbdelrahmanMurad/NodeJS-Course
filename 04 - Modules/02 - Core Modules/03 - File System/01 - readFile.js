const { readFile, readFileSync } = require('fs');

//TODO: Asynchronous Reading File VS Synchronous Reading File

//? Asynchronous Reading File 
// 3 Parameters: Path, Encoding, Callback fn.
// callback will catch the output.

readFile('./data/text.txt', 'utf8', (err, data) => {
    console.log('---async---\n', data)
})

//? Synchronous Reading File
// Use it with small size files to read it fast.
// Parameters: Path, Encoding.
const content = readFileSync('./data/text.txt', 'utf8')
console.log('---sync---\n', content)

//===================================================================
//you can use this way instead:
/*
const fs = require('fs');
const {fs} = require('fs'); // thats {fs} wrong; it will be a name.

fs.readFile('./data/text.txt', 'utf8', (err, data) => {
    console.log('---async---\n', data)
})

const contentFS = fs.readFileSync('./data/text.txt', 'utf8')
console.log('---sync---\n', contentFS)
*/ 
//question// what will be printed first? sync operation.