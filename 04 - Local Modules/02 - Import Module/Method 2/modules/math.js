const sum = (a, b) => {
    return a + b;
}

const multiply = (a, b) => {
    return a * b;
}

// use an object; not array. to be able to use function later by name; not index
module.exports = {
    // sum,            // key default = function name
    sum: sum,  // same as sum,
    mp: multiply
}; 

