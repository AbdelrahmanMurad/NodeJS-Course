/**Introduction
    Async
  - Async Before Function Mean This Function Return A Promise 
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style

    Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
  - Also, Avoid .then()
  More Elegant اكثر اناقة

    Async & Await With Try, Catch, Finally

//-------------------------------------------------------

we took 2 patterns to handle the async process:
    1- Callback. (spying)
    2- Promise To Solve The Callback-Hell.
    3- Async/Await To Create Asynchronous Promise Behavior With Cleaner Style. (More Elegant)

 *callback
const getUSData = (cb) => {
    const response = fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

    // error case
    if (response.status !== 200) {
        err = 'cannot fetch the data';
        cb(err);
    }

    const json = response.json()
    cb(json);
}

*promise
const getUSData = () => {
    return new Promise((resolve, reject) => {
        const response = fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        // error case
        if (response.status !== 200) {
            err = 'cannot fetch the data';
            reject(err);
        }
        const json = response.json()
        resolve(json);
    });
}
*/
//-------------------------------------------------------
/** Async/Await - How Does It Work ?
 * 1- Add the word async before the fn() starts. (Async Function)
 * 2- Async code inside Async Function => WRONG.
 * 3- Sync code inside Async Function => Write.
 * 4- So the Block Function of Async Function is Sync. (Block)
 * 5- How to convert Async code to sync? By adding the word await before the line of code starts.
 * 6- So the wrords await: convert the non-block(async) to block(sync).
 * 7- Also you're forced to add await before json() function, Why??.
 *    - Because in js the json() is async. 
 *    - But in logical, its sync.
 * 8- Async Function returns object promise. => fn().then().catch()
 * 9- promise is intermediary between async & sync.
 */
const getUSData = async () => {
    // const response = fetch(); // => async 
    // const response = await fetch(); // => sync
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population'); // I/O

    // error case
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
        // return err; => wrong, why ? to make a differece between the return json and the return error.
    }

    const json = await response.json();
    // console.log(json);
    return json;
}
// run
/**
 * you cant take the data from the async function to a variable. like:
 * const data = getUSData(); //=> sync
 * this is wrong. 
*/
getUSData()
    .then(data => console.log(data))
    .catch(err => console.log(err));

/**Notes:
 * 1- get api operation => async process. (I/O Operation) Async (non-blocking)
 * 2- fetch() => from node.js. (I/O Operation) Async (non-blocking) 
 * 3- json() => from node.js. (logicaly) (Sync) (blocking) 
 *    - in js the json() is async, but in logical its sync.
 * 4- So, fetch() & json() returns object promise.
 * 
 * 5- How to know if the style of code sync or async??  (we are talking about the style not the operation)
 *    - if the style of code doesn't contain any types of handling (the 3 patterns we took), then it's Sync. 
 *    - if the style of code contains any types of handling (the 3 patterns we took), then it's an Async.
 *    - Note that the style of code may not contain any types of handling (Sync), but it needs to be an Async,
 *      (this means the operation is Async), just like we learnt.
 * 
 * 6- Features of Async/Await: 
 *          - Helps in keeping the style of code like sync. (style of Async code = style of Sync code)
 *          - More Elegant.  
 * 7- we can say that calling a function of a promise is the same way as an async/await. (calling the output)
 */