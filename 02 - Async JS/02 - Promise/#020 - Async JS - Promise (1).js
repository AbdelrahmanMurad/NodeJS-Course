/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life.
  - Promise Is Something That Will Happen In The Future.
  ?- Promise Avoid Callback Hell.
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value
           والنتيجة الخاصة فيهasyncيمثل الحالة الخاصة ب

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully => Resolved State
  --- Rejected: Failed => Rejected State

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To then() And catch()) Upon Finishing.

  - then() => Fulfilled - Resolved State || Rejected State
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
  - catch() => Throws an Error.
--
 Promise Training
  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull, Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed => Do Something
--
 Promise
  - all (array of promises)
  - allSettled (array of promises) تسوية
       -- all() VS allSettled()
        - all(): in first reject, display the reject fn, the promise stops.
        - allSettled(): it countinues and diplay all data (fns), never stops until it reach to the end. 
  - race (just one promise) يظهر له سواء فشل او نجح promiseيطبع اول 
*/

const fs = require("fs"); //fs => famous librarie in js => fs: file system.
// مش شغالة عندي ليش ؟؟؟

// async process.
// TODO: Question - convert the callback to promise.

/**
 * *Callback function
 */

// const getProductByName = (name, cb) => {
//   const data = fs.readFileSync("../data/products.json"); // => sync, in other videos we will take AsyncReadingFile.
//   //  افترااااضااااا ،Async افترض انها بتشتغل 
//   // fs => return text not array, so we need to convert it to arrayOfObjects by JSON.parse().
//   const json = JSON.parse(data); // => arrayOfObjects
//   const product = json.find(product => product.name === name);
//   if (product) {
//     cb(undefined, product);
//   } else {
//     const err = { message: "Product not found" };
//     cb(err, null);
//   }
// }
// // callback and run
// getProductByName("Tea Ahmad", (err, p) => {
//   if (err) {
//     console.log(`error is: `, err.message);
//   } else {
//     console.log(p);
//   }
// });

console.log(`--------------------------------`);
/**
 * *Promise
 */
const products = require("../data/products.json");

const getProductByName = (name) => {
  return new Promise((resolve, reject) => {
    // const data = fs.readFileSync("../data/products.json");
    // const json = JSON.parse(data); 
    // const product = json.find(product => product.name === name);
    // مش راضية تشتغل fsطريقة ال
    const product = products.find(product => product.name === name);

    if (product) {
      resolve(product);
    } else {
      const err = { message: "Product not found", code: "404" };
      reject(err);
    }
  })
}

//run promise

// getProductByName("Cofee Ahmad")
getProductByName("Tea Ahmad")
  .then(data => console.log(data))
  .catch(err => console.log(err.message));
  // .catch(err => console.log(err.code));

/**Notes: Idea of the 2 patterns we took to solve the async issue.
 * 1- Callback: sent a spy (cb) to return the output from the Async Process.
 * 2- Promise: Promise between Sync & Async - Sync & Asyncاتفاق بين ال.
 *    -- The Promise is: The Async Process give her output to the Sync Process.
 *    -- So, we dont need to send a spy (cb).
 *    -- Async returns new object of type Promise.
 *    -- Take The code of async and put it inside the return new promise.
 *    -- Promise => resolve or reject. => promise(resolve,reject)
 * 3- Async/Await: Later.
 */

/** Code Of Promise:
 * 
 * NameOfFunction() {
 *  return new Promise((resolve,reject) => {
 * 
 * 
 *         Async Code;
 * 
 * 
 * });
 * 
 * NameOfFunction()
 *   .then()
 *   .catch();
 * */