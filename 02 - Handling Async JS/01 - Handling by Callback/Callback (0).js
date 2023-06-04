/*
 - require() = import, but why we used require() fn instead of import? 
 -- Because when it reads json files, it convert it to array of objects.
*/
const products = require('../data/products.json');

console.log(products);
console.log(`---async-process---`);

// async process
const getProductByName = (name) => {
    // timer for simulating an async
    setTimeout(() => {
        // const product = products.find(prod => prod.name === name);
        // return product; =========> or 
        return products.find(prod => prod.name === name);
        /*prod.name === name 
        parameterاسمه يساوي اسم ال arrayلما البرودكت اللي في ال
        // return products.find(array => array.name === name);
        */
    }, 5000);
}

//we want Tea Ahmad.
let product = getProductByName(`Tea Ahmad`);
console.log(product); //not Tea Ahmad => its undefind, why?? read the notes.

/** Notes:
 * 1- find(): fn from array. like forEach (loop).
 * 2- Why the result is not Tea Ahmed, undefind ?? 
 *      a) Asyncاي ما بشوفها وهذا في حالة ال dataالمبرمج والبرنامج بقدرش يوصل لل
 *      b) Asyncمشكلة التعامل مع ال
 *          1- يخلص Asyncبنعرفش وقتيش ال.
 *          2- البيانات اللي بدي اياها Asyncبعرفش وقتيش اخد من عملية ال
 * 3- To Handle the (output or response) of async:
 *      A- callback
 *      B- promise
 *      C- async/await.
 *      -- Handle||Process معالجة
 * 5- getProductByName: The Fn is Synchronous, and we used the setTimeout() function
 *    on it to be an Example of Asynchronous.
 */

/** What is the deference between these two code snippets??

1) const getProductByName = (name) => {
    setTimeout(() => {
       return = products.find((prod) => prod.name === name);
    }, 5000)
}

2) const getProductByName = (name) => {
    setTimeout(() => {
       return = products.find(name);
    }, 5000)
}

---Answer

In JavaScript, there are a few differences between the two code snippets you provided:

1) The first code snippet declares a function called getProductByName using an arrow function syntax.
   This function takes in a parameter called name. Inside the function, there's a setTimeout function
   that waits for 5 seconds before executing the code inside it. This code calls the find method on an
   array called products, passing in a function as an argument that searches for an object with a name
   property that matches the name parameter. Once a matching object is found, it returns that object.
   However, the return statement is inside the callback function passed to setTimeout, which means it
   won't return anything directly to the calling function.

2) The second code snippet is similar to the first one, but it passes a single argument to the find
   method instead of a callback function. This code won't work as expected since name alone is not 
   a valid argument for find method. You would need to pass a callback function that matches the
   syntax in the first code snippet to search for the name property.

So, in summary, 
the first code snippet attempts to find an object with a matching name property from an array of products
after waiting for 5 seconds. The second code snippet won't work as expected since it's passing an invalid 
argument to the find method.
 */