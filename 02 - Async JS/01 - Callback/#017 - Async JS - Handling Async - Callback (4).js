// Callback Hell || Pyramid Of Doom هرم الموت  => nested callbacks, nested functions.
//TODO: Example: we want to print the product Tea Ahmad and its store with the city. How?? answer is: by callback hell.
// we want all details about product Tea Ahmad.

const products = require('../data/products.json');
const stores = require('../data/stores.json');
const cities = require('../data/cities.json');

/**
 * async processes
 *  1- getProductByName
 *  2- getStoreById
 *  3- getCityByName
 */

const getProductByName = (name, cb) => {
    //(cb) is a function that passed into (getProductByName) function as an argument to be executed later.
    setTimeout(() => {
        // const product = products.find((prod) => prod.name === name);
        // cb(product);
        cb(products.find((prod) => prod.name === name));
    }, 5000)
}

const getStoreById = (id, cb) => {
    setTimeout(() => {
        cb(stores.find((sto) => sto.id === id));
    }, 5000)
}

const getCityByName = (name, cb) => {
    setTimeout(() => {
        cb(cities.find((cit) => cit.name === name));
    }, 5000)
}


/**
 *  callback function
 */

const productName = "Tea Ahmad";

getProductByName(productName, (prod) => {
    console.log(`product is`, prod);

    getStoreById(prod.store_id, (sto) => {
        console.log(`store is`, sto);

        getCityByName(sto.city, (cit) => {
            console.log(`city is`, cit);
        })
    })
});

//TODO: if we want to print just the city of product Tea Ahmad, How?? By callback hell.
// getProductByName(productName, (p) => {
//     id = p.store_id;
//     getStoreById(id, (s) => {
//         city = s.city;
//         getCityByName(city, (c) => {
//             console.log(c.name);
//             console.log(c);
//         });
//     })
// });