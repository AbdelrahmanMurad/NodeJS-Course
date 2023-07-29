// const math = require('./modules/math/math')
// or automatically import (default)
const math = require('./modules/') //# index.js

// if you want just sum
// const sum = require('./modules/math/sum');

const val1 = 5, val2 = 7;

const sumResult = math.sum(val1, val2);
const mulResult = math.multiply(val1, val2);

console.log(`summation of ${val1} and ${val2} is ${sumResult}`);
console.log(`multiply of ${val1} and ${val2} is ${mulResult}`);