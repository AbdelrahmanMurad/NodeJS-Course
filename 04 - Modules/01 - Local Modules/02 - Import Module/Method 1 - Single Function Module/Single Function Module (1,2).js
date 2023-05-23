const sumOperation = require('./modules/summation');
const mulOperation = require('./modules/multiply');

const val1 = 5, val2 = 7;

const sumResult = sumOperation(val1, val2);
const mulResult = mulOperation(val1, val2);

console.log(`Summation of ${val1} and ${val2} is ${sumResult}`);
console.log(`Multiply of ${val1} and ${val2} is ${mulResult}`);

/**
 * 1- name of module: summation, multiply
 * 2- name of fn: summation, multiply
 * 3- name of import operation: sumOperation, mulOperation.
 *      - There is no conflict or problem.
 * 4- name of import operation can be different than name of module or name of fn.
 *      - مش شرط الأسماء تكون نفس الاسم
 *      - name of module.
 *      - name of function.
 *      - name of import operation.
 */