/**
 * Async\Await usually returns a promise => .then().catch(), if you dont want to use .then().catch(), you can handle it by: 
 *  1 - Promise inside the Async fn.
 *  2 - Callback inside the Async fn. (now we will take this)
 */

const fs = require('fs');

const getProductByName = async (name, cb) => {
    //Here: await is optional, but its mandatory used when there are other lines after this line.
    // fs.readFile('../data/products.json', 'utf8', (err, data) => {
    // حطها افضل عشان ما تتلخبط
    // Handle <= I/O افهمها واحفظها هيك => مدام 
    await fs.readFile('../data/products.json', 'utf8', (err, data) => {
        if (err) {
            cb(err, null)
        } else {
            cb(undefined, data)
        }
    })
    // lines of code
    // if there were lines of code, we will use await in the previous line.
}

// pass cb as variable
const handleGetProductByName = (err, product) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(product);
        console.log('--------------------------------');
    }
}

getProductByName('Tea Ahmad', handleGetProductByName)
// pass cb as anonymous function
getProductByName('Tea Ahmad', (err, product) => {
    if (err) {
        console.log(err.message);
    } else if (product) {
        console.log(product);
    }
})

// we did not use .then().catch() at all

/** شو الميزة ؟؟
 * - If you dont want the type of output a promise, and dont use then()catch(). 
 *          Async\Await ولا promise يعني لا
 *  - you will use callback\Async.
 */