const sumOperation = require('./modules/sum');
const multiply = require('./modules/multiply');

const val1 = 5;
const val2 = 7;

const sumResult = sumOperation(val1, val2);
const mulResult = multiply(val1, val2);

console.log(`summation of ${val1} and ${val2} is ${sumResult}`);
console.log(`multiply of ${val1} and ${val2} is ${mulResult}`);

/**
 * 1- name of module: sum, multiply
 * 2- name of fn: summation, multiply
 * 3- name of import operation: sumOperation, multiply.
 * - There is no conflict or problem.
 */