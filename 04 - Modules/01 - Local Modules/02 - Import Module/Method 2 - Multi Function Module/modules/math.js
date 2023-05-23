const sum = (a, b) => {
    return a + b;
}

const multiply = (a, b) => {
    return a * b;
}

/*** How to export Module has multi functions??
 * use an object; not array. to be able to use function later by name; not index.
 * key: value
 *      key => Any name.
 *      value => Function Name. 
 */

module.exports = {
    /* There is 3 ways.

    1) keyName default = functionName 
        sum,
        multiply

    2) keyName = valueName
        sum: sum,
        multiply: multiply
     
        [1) == 2)]

    3) keyName != valueName
        summation: sum,
        mp: multiply

        يعني من الاخر، سمي الاسم اللي بدك اياه
    */
    summation: sum,
    mp: multiply
};