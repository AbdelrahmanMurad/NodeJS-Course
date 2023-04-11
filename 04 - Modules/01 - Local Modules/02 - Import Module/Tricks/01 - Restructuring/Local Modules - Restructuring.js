// const math = require('./modules/') //Normal way

//? Restructure
const { sum, multiply } = require('./modules/')
// or
// const { sum } = require('./modules/')
// const { multiply } = require('./modules/')
// Restructure نفس المسار
// in case of Restructure: Name of variable = Name of function. 

const val1 = 5;
const val2 = 7;

const sumResult = sum(val1, val2);
const mulResult = multiply(val1, val2);

console.log(`summation of ${val1} and ${val2} is ${sumResult}`);
console.log(`multiply of ${val1} and ${val2} is ${mulResult}`);