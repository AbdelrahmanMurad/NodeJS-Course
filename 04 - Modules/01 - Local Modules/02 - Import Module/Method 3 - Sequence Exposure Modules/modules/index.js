/** old way

// import first
const sum = require('./sum');
const multiply = require('./multiply')

// then export them as a single object
module.exports = {
    sum,
    multiply
}
*/

//or export and import in the same time
module.exports = {
  sum: require("./math/sum"),
  multiply: require("./math/multiply"),
};