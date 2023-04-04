/**
 * import a function from a file contains only it
 */
const sumOperation = require('./modules/sum');
const multiply = require('./modules/multiply');

const val1 = 5;
const val2 = 7;

const sumResult = sumOperation(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`);

const multiplyResult = multiply(val1, val2);
console.log(`multiply of ${val1} and ${val2} is ${multiplyResult}`);

/**Notes:
 * 1- Name of variable that contains import operation can be different than name of module or name of fn.
 *    - مش شرط الأسماء تكون نفس الاسم
 * 2- Before importing the Module, you need to export the Module. 
 *    - Without exporting the Module, you will import a file not module.
 * 3- Method 1 of importing & exporting: every one fn in one module.
 *     - Thats not good. You need to merge them. => Method 2
 */