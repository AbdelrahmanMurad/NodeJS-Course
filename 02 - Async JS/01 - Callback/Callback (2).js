const products = require('../data/products.json');

// async process
const getProductByName = (name, cb) => {
    setTimeout(() => {
        // const product = products.find((productArray) => productArray.name === name);
        // cb(product);
        cb(products.find((productArray) => productArray.name === name));
    }, 3000);
}

// callback function => handleGetProductByName (cb)
/**
 * ?Passing the callback as an argument has two ways:
 *    a) as a variable. 
 *    b) as an anonymous function: the declaration of the callback function.
 */

//?a) Passing the callback as a variable as argument. 
const handleGetProductByName = (prod) => {
    // prod = output of products.find((productArray) => productArray.name === name
    console.log(prod);
}

// run
const t = `Tea Ahmad`;
// const c = `Coffee Star`;
getProductByName(t, handleGetProductByName);

//?b) Passing the callback as an anonymous function: the declaration of the callback function.
getProductByName(t, (prod) => {
    console.log(prod);
    console.log(`name:`, prod.name);
    console.log(`price:`, prod.price);
    console.log(`discount:`, prod.discount);
    console.log(`id:`, prod.store_id);
});


/** Notes: just in callback.
 * 1- To (solve-handle) the Async problem: we need a callback fn (spy). 
 *  -- We send this spy to the Async process, to return the output(data).
 * 2- const product = products.find((prod) => prod.name === name); => output
 *    cb(product); => cb(outputOfProduct);
 * 3- So, the callback fn will return the output of first parameter. 
 */