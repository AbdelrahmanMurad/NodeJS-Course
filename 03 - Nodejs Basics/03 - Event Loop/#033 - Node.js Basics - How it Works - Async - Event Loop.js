//! You MUST see the lecture. 
//https://www.youtube.com/watch?v=GUpkkfkxUbc&list=PLE5Mq0Nw_Flr1kMDtWmQYmAfURQpH3r8H&index=33
//! You can use this link to understand more => http://latentflip.com/loupe/
//! note that website dont supppot ES.
//How Asynchrones Execution works in node.js

//Application for Encryption.
const { pbkdf2 } = require('crypto')

//calculate execution time.
const start = Date.now();

const hash = () => {
    //password => كلمة السر 
    //solt => كلام بنضيفه عشان نصعب كلمة السر
    //10000 => ecnription on iterations(loop).
    //1000 => bytes
    //sha256 => خوارزمية تشفير مشهورة
    //callback => Async, why callback? because pbkdf2 takes a callback.
    pbkdf2('password', 'solt', 10000, 1000, 'sha256', () => {
        // Calculates How long did this process take time? (in ms): 
        //    Date.now() - start
        console.log('Hash', Date.now() - start);
    })
}

hash();
hash();
hash();
hash();
// hash(); // that will wait & and the execution time is so far.


/** Notes:
 * 1- As we said, Node.js is Synchronous - Sigle Thread - V8 Engine: V8 call stack.
 * 2- If Node.js is Synchronous, then how to do Asynchronous operations?
 *      - By Asynchronous code Handler, in node.js named as Libuv.
 * 3- Libuv has a Component responsible on asynchronous execution.
 * 4- This Component named as Event-Loop (like a bus).
 * 5- Libuv is Multithreading. 
 * 6- Node.js in Sync is Sigle thread. => (V8 Engine)
 * 7- Node.js in Async is Multi thread (4 threads). => (libuv)
 * 8- Async Steps: V8(callStack) - Libuv - 
 *           Notification from Libuv to Event loop (bus) - 
 *           Event loop move output from Libuv to msg queue -   
 *           Event loop move output from msg queue to V8.  
 */