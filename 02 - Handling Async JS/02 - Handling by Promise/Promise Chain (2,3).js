// const fs = require('fs'); 
const products = require('../data/products.json');
const stores = require('../data/stores.json');
const cities = require('../data/cities.json');

/**
 * async processes
 */
const getProductByName = (name) => {
    return new Promise((resolve, reject) => {
        // const data = fs.readFileSync('../data/products.json');
        // const json = JSON.parse(data);
        // const product = json.find(product => product.name === name);
        const product = products.find(product => product.name === name);

        if (product) {
            resolve(product);
        } else {
            err = { message: "Not found", code: 404 };
            reject(err);
        }
    })
}

const getStoreById = (id) => {
    return new Promise((resolve, reject) => {
        // const data = fs.readFileSync('../data/stores.json');
        // const json = JSON.parse(data);
        // const store = json.find(sto => sto.id === id);
        const store = stores.find(sto => sto.id === id);

        if (store) {
            resolve(store);
        } else {
            const err = { message: "Id Store Not Found - 404" };
            reject(err);
        }
    });
}

const getCityByName = (name) => {
    return new Promise((resolve, reject) => {
        // const data = fs.readFileSync('../data/cities.json');
        // const json = JSON.parse(data);
        // const city = json.find(cit => cit.name === name);
        const city = cities.find(cit => cit.name === name);

        if (city) {
            resolve(city);
        } else {
            const err = { message: "Not found", code: 404 };
            reject(err);
        }
    });
}

// run
//TODO: Question get the name of city from product Tea Ahmad.
const productName = 'Tea Ahmad';
//name of product then id then name of city.

//1
getProductByName(productName)
    .then((prod) => {
        getStoreById(prod.store_id)
            .then((sto) => {
                getCityByName(sto.city)
                    .then((cit) => {
                        console.log(cit.name);
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

// above is like callback hell (promise hell || nested promises)
// so, the solution is promise chain => 2
// like following

getProductByName(productName)
    .then(prod => getStoreById(prod.store_id))
    .then(str => getCityByName(str.city))
    .then(cit => console.log(cit.name))
    .catch(err => console.log(err))
//this catch handle the error for all the promises.

// if you want, you can write return. => 3
getProductByName(productName)
    .then(product => { return getStoreById(product.store_id); })
    .then(store => { return getCityByName(store.city) })
    .then(city => console.log(city.name))
    .catch(err => console.log(err))

/**Notes:
 * 1- Promise means => fn().then().catch()
 * 2- Promise chain is better.
 * 3- In case Promise Hell: Fill out the catch first, So you don't get confused.
 * 4- Async/Await to the rescue.
 */