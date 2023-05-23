const fs = require('fs');

const getProductByName = async (name, cb) => {
    //Here: await is optional, but its mandatory used when there are other lines after this line.
    // await fs.readFile('../data/products.json', 'utf8', (err, data) => {
    fs.readFile('../data/products.json', 'utf8', (err, data) => {
        if (err) {
            cb(err, null)
        } else {
            cb(undefined, data)
        }
    })
    // lines
    // if there were lines, we will use await in the previous line.
}

const handleGetProductByName = (err, product) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(product);
    }
}

getProductByName('Tea Ahmad', handleGetProductByName)

/** شو الميزة ؟؟
 * - If you dont want the type of output a promise, and dont use then()catch().
 *  - you will use callback\Async. 
 */