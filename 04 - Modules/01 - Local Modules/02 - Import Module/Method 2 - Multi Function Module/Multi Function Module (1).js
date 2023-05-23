const math = require('./modules/math');

const val1 = 5, val2 = 7;

const sumResult = math.summation(val1, val2);
const mulResult = math.mp(val1, val2);

console.log(`Summation of ${val1} and ${val2} is ${sumResult}`);
console.log(`Multiply of ${val1} and ${val2} is ${mulResult}`);