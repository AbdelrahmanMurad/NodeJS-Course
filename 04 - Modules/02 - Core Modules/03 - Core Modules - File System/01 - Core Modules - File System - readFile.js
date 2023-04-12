const { readFile, readFileSync } = require('fs')

// Asynchronous read function
// 3 Parameters: Path, Encoding, Callback fn.
// callback will catch the output.
readFile('./data/text.txt', 'utf8', (err, data) => {
    console.log('async', data)
})


// Synchronous reading file
// Use it with small size files to read it fast.
// Parameters: Path, Encoding.
const content = readFileSync('./data/text.txt', 'utf8')
console.log('sync', content)


//question// what will be printed first? sync operation.