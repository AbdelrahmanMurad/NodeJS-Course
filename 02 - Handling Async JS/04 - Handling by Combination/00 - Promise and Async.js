/**
 * async usually used to handle returned promise (instead of promise chain)
 *  we will take the fourth way to handle an asynchronous operation: Merging Promise with Async/Await. 
 *    1- Promise: we will use it in the Structure of the fn. (Structue)
 *    2- Async/Await: we will use it in the Calling of the function. (Calling the output)
 */

// const fs = require('fs'); 
const products = require('../data/products.json');
const stores = require('../data/stores.json');
const cities = require('../data/cities.json');

//async processes

/* another code
const getProductByName = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile('../data/products.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                const product = json.find(product => product.name === name);

                if (product) {
                    resolve(product);
                } else {
                    err = { message: "Not found", code: 404 };
                    reject(err);
                }
            }
        });
    })
}

const getStoreById = (id) => {
    return new Promise((resolve, reject) => {
        fs.readFile('../data/stores.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                const store = json.find(store => store.id === id);

                if (store) {
                    resolve(store);
                } else {
                    err = { message: "Not found", code: 404 };
                    reject(err);
                }
            }
        });
    })
}

const getCityByName = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile('../data/cities.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                const city = json.find(city => city.name === name);

                if (city) {
                    resolve(city);
                } else {
                    err = { message: "Not found", code: 404 };
                    reject(err);
                }
            }
        });
    })
}
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
            err = { message: "Produt Not found", code: 404 };
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
            const err = { message: "City Not found", code: 404 };
            reject(err);
        }
    });
}


//handling promise by async
//why ?? because its a promise and the promise is async.
//new fn named getCityFromProduct
const getCityFromProduct = async (productName) => {
    try {
        // add await before the fn() that returns a promise.
        const product = await getProductByName(productName);
        const store = await getStoreById(product.store_id);
        const city = await getCityByName(store.city);

        console.log(city.name);
        console.log(city)

        /** return city;
         * If we used return, then you need to call the getCityFromProduct() with using then & catch.
         * Because it return a promise, and the promise means then & catch.
         * وهيك شغلنا راح على الفاضي
         * .then().catch()احنا اللي بدنا اياه انو ما نستخدم ال
         * And thats what meant by Handling Promise by Async/Await.
         */
    } catch (err) {
        console.log(err.message)
    }
}

// .then().catch() كل هذا عشان ما ترجع 
getCityFromProduct('Tea Ahmad');

/*//! with return
const getCityFromProduct = async (productName) => {
    const product = await getProductByName(productName);
    const store = await getStoreById(product.store_id);
    const city = await getCityByName(store.city);
    return city;
}
getCityFromProduct('Tea Ahmad')
    .then(data => console.log(data))
    .catch(err => console.log(err))
 */
//?----------------------------------------------------------------
/**
 * look files 07,08_async
 * we notice that you can handle async response within async function, or return async response from async function
 * if u handle it within async(), you can access it directly without then,catch
 * but if u return it from async(), you will deal with async response as a promise then,catch
 */