/**
 * you can get a data from a file using fs
 * but also u can get it by "importing", using require() function + relative path
 */

// require json file + auto converted to array of objects
const products = require('./data/products.json'); 
// importing a file

console.log(products);


/** Notes:
 * - type of require() fn above its not importing a module, its importing a file, why?
 *     - Because the file contains data, and the data will be stored (copied) in the variable.
 *     - and this file is json, module should be JS file.
 *     - module has require() & export.
 */