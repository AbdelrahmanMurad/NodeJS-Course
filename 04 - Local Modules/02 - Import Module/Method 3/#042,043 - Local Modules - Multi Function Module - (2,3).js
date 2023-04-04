/**
 * import some functions from a folder contains many + index file
 */
const math = require('./modules/math/math')
// or
// automatically import
// const math = require('./modules/math')       # index.js

// if you want just sum
// const sum = require('./modules/math/sum');

const val1 = 5;
const val2 = 7;

const sumResult = math.sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`)

const multiplyResult = math.multiply(val1, val2);
console.log(`multiply of ${val1} and ${val2} is ${multiplyResult}`)

/**Notes:
 * 1- Method3: merging between Method 1 and 2.
 *      - (1): every fn has a module.
 *      - (2): all functions in one module.
 *      - (3): every modules in  one module.
 *              - one module importing modules.
 *              - exposing chain.
 * 2- if your file name is index.js, automatically import will happen.
 */