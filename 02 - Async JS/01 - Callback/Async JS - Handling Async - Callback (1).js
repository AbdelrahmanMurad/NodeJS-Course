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
 * 1- ولكن انا اللي بنشئهcallbackمش انا اللي بحدد متى يتم استدعاء ال 
 * 2- بعد 3ثواني callbackهي اللي استدعت ال setTimeoutفي المثال السابق ال
 * 3- Handling for async output في ال callbackلذلك غالبا يتم استخدام ال
 * 4-  العادي انا اللي بنشئه وانا اللي بحدد وقتيش يتم استدعاؤه fnال
 * 5- Example for Async callback fn: onClick button in vanilla js.
 *      A- onClickا، هو ضغطة اليوزر على الزر .أي انه ال callback fnاللي بستدعي ال 
 * 6- setTimeout() can takes callback fn and time out.
 */