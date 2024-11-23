const divisionOps = require('./division');

module.exports = {
    sum: require('./sum'),                  // function
    multiply: require('./multiply'),        // function
    division: require('./division'),        // object
    div: divisionOps.division,              // function from imported import
    reminder: divisionOps.reminder          // function from imported import
};