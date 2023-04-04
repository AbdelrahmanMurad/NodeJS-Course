/**
 * import some functions from a file contains many
 */
const math = require('./modules/math')

const val1 = 5;
const val2 = 7;

const sumResult = math.sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`)

const multiplyResult = math.multiply(val1, val2);
console.log(`multiply of ${val1} and ${val2} is ${multiplyResult}`)

/**Notes:
 * 1- How to export Module has multi functions??
 *   - use an object; not array. to be able to use function later by name; not index
 *         module.exports = {
 *              sum,            // key default = function name
 *              mp: multiply
 *         };
 *   - you can use array but you will use it by its index not name.
 * 2- This method has a problem that if the module has 300 fn, and i need just one fn from the module.
 *       - Its not possible to use the module just for one function.
 *       - Look at Method 3. 
 */

