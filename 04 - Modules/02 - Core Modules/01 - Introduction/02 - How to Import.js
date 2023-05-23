//* Normal way
const fs = require('fs');

// async reading file
fs.readFile('path', 'utf8', (err, data) => {
    console.log('async', data)
})

// sync reading file
fs.readFileSync('path', 'utf8', (err, data) => {
    console.log('sync', data)
})

//* Restructure
const { readFile, readFileSync } = require('fs')

// async reading file
readFile('path', 'utf8', (err, data) => {
    console.log('async', data)
})

// sync reading file
const content = readFileSync('path', 'utf8')
console.log('sync', content)