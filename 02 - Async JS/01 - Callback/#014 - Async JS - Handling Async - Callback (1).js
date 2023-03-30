/*
  - What Is Callback
  - we will take callback hell later.

  What Is Callback
  - Its A Function That Is Passed Into Another One As An Argument To Be Executed Later.
  - Example (1) // getProductByName = (name, cb) {code}
  --- [A] (cb) is a function that passed into (getProductByName) function as an argument to be executed later.
  - Example (2) // getProductByName = (name, cb) {code}
  --- [A] Read Note 5.
*/

const computeTax = (amount, taxPercent) => {
   const tax = (taxPercent / 100) * amount;
   return tax;
}

console.log(`Sync is ${computeTax(400, 10)}`);

const cb = () => {
   console.log(`Async is ${computeTax(800, 10)}`);
};

setTimeout(cb, 3000);

/** Notes:
 * 
 * 1- ولكن انا اللي بنشئهcallbackمش انا اللي بحدد متى يتم استدعاء ال 
 * 2- بعد 3ثواني callbackهي اللي استدعت ال setTimeoutفي المثال السابق ال
 * 3- Handling for async output في ال callbackلذلك غالبا يتم استخدام ال
 * 
 * 4-  العادي انا اللي بنشئه وانا اللي بحدد وقتيش يتم استدعاؤه fnال
 * 5- Example for Async callback fn: onClick button in vanilla js.
 *      A- onClickا، هو ضغطة اليوزر على الزر .أي انه ال callback fnاللي بستدعي ال 
 * 6- setTimeout() can takes callback fn and time out.
 */

/** REMEMBER: What is the deference between these two code snippets??

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