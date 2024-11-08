/** Introduction to Async and Await
 *
 * Async:
 * - Adding the `async` keyword before a function means this function returns a promise.
 * - `async` and `await` help create asynchronous promise behavior with a cleaner and more readable style.
 *
 * Await:
 * - `await` only works inside `async` functions.
 * - `await` makes JavaScript wait for the promise's result.
 * - `await` provides a more elegant way to handle promises without using `.then()`.
 *
 * Using Async & Await with Try, Catch, Finally:
 * - Offers a way to handle errors and finalize processes in an elegant manner.
 */

/** Patterns to Handle Async Processes:
 * 1. Callback (spying).
 * 2. Promise to solve the callback hell problem.
 * 3. Async/Await for cleaner and more readable asynchronous code.
 */

// Example of a callback function:
const getUSDataCallback = (cb) => {
    const response = fetch('<https://datausa.io/api/data?drilldowns=Nation&measures=Population>');

    // Error case:
    if (response.status !== 200) {
        const err = 'Cannot fetch the data';
        cb(err);
    }

    const json = response.json();
    cb(json);
};

// Example of a promise:
const getUSDataPromise = () => {
    return new Promise((resolve, reject) => {
        const response = fetch('<https://datausa.io/api/data?drilldowns=Nation&measures=Population>');

        // Error case:
        if (response.status !== 200) {
            const err = 'Cannot fetch the data';
            reject(err);
        }

        const json = response.json();
        resolve(json);
    });
};

/** How Async/Await Works:
 * 1. Add the `async` keyword before a function declaration to make it an async function.
 * 2. Async code inside an async function is incorrect; only sync code should be written directly.
 * 3. The block inside an async function is synchronous by default.
 * 4. To convert async code to sync, add `await` before async function calls.
 * 5. The `await` keyword ensures that JavaScript waits for the promise to resolve.
 * 6. `json()` is async in JavaScript, but logically it is considered sync.
 * 7. An `async` function returns a promise, allowing `.then()` and `.catch()` to be used.
 * 8. Promises act as intermediaries between async and sync code.
 */

// Example using async/await:
const getUSData = async () => {
    // Fetch API request (I/O operation):
    const response = await fetch('<https://datausa.io/api/data?drilldowns=Nation&measures=Population>');

    // Handle error case:
    if (response.status !== 200) {
        throw new Error('Cannot fetch the data');
    }

    // Wait for and parse JSON response:
    const json = await response.json();
    return json;
};

// Running the async function:
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