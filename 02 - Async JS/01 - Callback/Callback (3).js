const products = require('../data/products.json');
const stores = require('../data/stores.json');
const cities = require('../data/cities.json');

// console.log(products);
// console.log(`-----`);
// console.log(stores);
// console.log(`-----`);
// console.log(cities);



let name = `Tea Ahmad`;
let id = 1;
let nameOfCity = `Gaza`;



/**
 *  async processes => getProductByName - (1)
 */
const getProductByName = (name, cb) => {
    //(cb) is a function that passed into (getProductByName) function as an argument to be executed later.
    setTimeout(() => {
        // const product = products.find((prod) => prod.name === name);
        // cb(product);
        cb(products.find((prod) => prod.name === name));
    }, 5000)
}

/**
 * ?callback function => getProductByName
 *  - two ways: a) cb as a variable. b) cb as anonymous function.
 */
//a) cb as a variable.
handleGetProductByName = (p) => {
    console.log(p);
}
getProductByName(name, handleGetProductByName);

//b) cb as anonymous function.
getProductByName(name, (p) => console.log(p));




/**
 *  async processes => getStoreById - (2)
 */
const getStoreById = (id, cb) => {
    setTimeout(() => {
        cb(stores.find((sto) => sto.id === id));
    }, 5000)
}


//a) cb as a variable.
handleGetStoreById = (s) => {
    console.log(s);
}
getStoreById(id, handleGetStoreById);
//b) cb as anonymous function.
getStoreById(id, (s) => console.log(s));




/**
 *  async processes => getCityByName - (3)
 */
const getCityByName = (name, cb) => {
    setTimeout(() => {
        cb(cities.find((cit) => cit.name === name));
    }, 5000)
}


//a) cb as a variable.
handleGetCityByName = (c) => {
    console.log(c);
}
getCityByName(nameOfCity, handleGetCityByName);
//b) cb as anonymous function.
getCityByName(nameOfCity, (c) => console.log(c));