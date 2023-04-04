/** Notes: Intro lecture #36
 * 1- Libraries & Import Filesموضوع بجمع بين ال
 * 2- we can say that node.js is a module.
 * 3- we can say that library is a module.
 * 4- Module: Component contains functions.
 * 5- Module component or library or package contains functions.
 * 6- Types of Modules:
 *    1)Core Modules: Node.js Dependencies. بتيجي مع المكتبة
 *    2)NPM Modules: external packages. مكتبات خارجية
 *    3)Local Modules: My Modules. انا بعملهم
 */

/**
 * you can get a data from a file using fs
 * but also u can get it by "importing", using require() function + relative path
 */


// require json file + auto converted to array of objects
const products = require('./data/products.json'); 
// importing a file

console.log(products);


/** Notes:
 * 1- type of require() fn above its not importing a module, its importing a file, why?.
 *     - Because the file contains data, and the data will be stored (copied) in the variable.
 *     - and this file is json, module should be js file.
 *     - module has require() & export.
 */