/**
 * How to Import??
 * 1- Notmal way
 * 2- Restructuring
 * ==================
 * readFile() => 3 parameters => path, encode, callback fn.
 * readFileSync() => 2 parameters => path, encode.
 */

//* 1. Normal way
const fs = require('fs');

// async reading file
fs.readFile('path', 'utf8', (err, data) => {
    console.log('async', data)
})

// sync reading file
fs.readFileSync('path', 'utf8', (err, data) => {
    console.log('sync', data)
})

//* 2. Restructure
const { readFile, readFileSync } = require('fs')

// async reading file
readFile('path', 'utf8', (err, data) => {
    console.log('async', data)
})

// sync reading file
const content = readFileSync('path', 'utf8')
console.log('sync', content)