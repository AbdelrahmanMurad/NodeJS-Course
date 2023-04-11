/** old way
const sum = require('./sum');
const multiply = require('./multiply')

module.exports = {
    sum,
    multiply
}
*/

//or 
module.exports = {
    sum: require('./sum'),
    multiply: require('./multiply')
    // sum: (a,b)=>a+b,
    // multiply: (a,b)=>a*b
};