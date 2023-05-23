/** old way
const sum = require('./sum');
const multiply = require('./multiply')

module.exports = {
    sum,
    multiply
}
*/

//or 1 & 2
module.exports = {
    //1
    sum: require('./sum'),
    multiply: require('./multiply')
    //2
    // sum: (a,b)=>a+b,
    // multiply: (a,b)=>a*b
};