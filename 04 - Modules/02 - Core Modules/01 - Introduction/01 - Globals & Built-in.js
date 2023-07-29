/**
 * There are some modules/functions are not need to be imported, because its global (already imported)
 * built-in functions usually be globals
 * built-in from js
 * global from node.js
 */

/** Examples: 
 * 1) class Math.
 * 2) fetch('url').
 * 3) global obj => object contains information about Fns we used in this app.
 * 4) process obj => information about the environment.
 */

//1
const absVal = Math.abs(-8);
console.log(absVal);

//2
console.log("------------------fetch------------------");
const apiResponse = fetch('some_url');
console.log(apiResponse);

//3
console.log("------------------global------------------");
console.log(global)
console.log("------------------global.car------------------");
global.car = 'delorean';
console.log(global.car)

//4
console.log("------------------env------------------");
//env => information about your environment(laptop).
console.log(process.env);
console.log("------------------argv------------------");
//argv => مسار العملية اللي شغالة حاليا 
console.log(process.argv);
console.log("------------------memoryUsage------------------");
//memoryUsage => استهلاك الميموري اللي ماخده التطبيق
console.log(process.memoryUsage());