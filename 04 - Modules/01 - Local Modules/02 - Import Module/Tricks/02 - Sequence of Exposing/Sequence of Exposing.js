// restructure
const { sum, multiply, division, reminder, div } = require('./modules/math')

const val1 = 5, val2 = 7;

const sumResult = sum(val1, val2);
const mulResult = multiply(val1, val2);
console.log(`summation of ${val1} and ${val2} is ${sumResult}`);
console.log(`multiply of ${val1} and ${val2} is ${mulResult}`);

///////////////////////////////////////////////

//normal way
const math = require('./modules/math');

// reminder
console.log(math.division.reminder(val1, val2));
console.log(division.reminder(val1, val2));
console.log(reminder(val1, val2));
console.log(div(val1, val2));
// console.log(division(val1, val2));
