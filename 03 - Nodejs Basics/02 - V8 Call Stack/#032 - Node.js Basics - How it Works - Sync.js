//! You MUST see the lecture.
//How Synchrones Execution works in node.js

//?first section.
console.log('first line');
console.log('second line');
console.log('third line');
console.log('forth line');

/** Notes:
 * 1- How Synchrones Execution works in node.js??
 *    JS Engine named in node.js as V8 Engine: is responsible on execution the code synchronously. متزامن - بشكل متسلسل
 *     - Single Thread means just one thread works at a time - just one stack.
 *     - Name of process or thread is: V8 Call Stack, means Single Thread.
 *     - After Execution The Process(calling stack) will be Empty.
 */


console.log("--------------------------");

//?second section.
const cee = () => {
    console.log('output is', 'cee');
}

const boo = () => {
    console.log('output is', 'boo');
    cee();
}

const foo = () => {
    console.log('output is', 'foo')
    boo();
}

////////////////

console.log('output is', 'running')
cee();
foo();


/** Notes:
 * 1- The Block code Inside the Function(cee||boo||foo) deletes from the stack before the function.
 * 2- So, The Function will not be deleted from the stack, until all the block inside the fn excutes and be deleted.
 * 3- If the Function deleted from the stack before its block, the block will not executes. (the fn will not executes).
 * 4- Initializing the function different from Excuteing the function in the calling stack(process).
 *     initializing it first,
 *     then the execute will start when you call the function.
 */