/**
 * import some functions from a folder contains many + index file
 */
const math = require('./modules/math')

// restructure
const { sum } = require('./modules/math')
const { multiply } = require('./modules/math')
// or
// const { sum, multiply } = require('./modules/math')
// Restructure نفس المسار


const val1 = 5;
const val2 = 7;

// math.sum
const sumResult = math.sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`)

// sum
const sumResult2 = sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult2}`)


/** 
 const { sum } = require('./modules/math')
const { multiply } = require('./modules/math')
// or
// const { sum, multiply } = require('./modules/math')

const sumResult = sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`)

const multiplyResult = multiply(val1, val2);
console.log(`multiply of ${val1} and ${val2} is ${multiplyResult}`)

 */
