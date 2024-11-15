//! You MUST see the lecture. 
//https://youtu.be/GUpkkfkxUbc?list=PLE5Mq0Nw_Flr1kMDtWmQYmAfURQpH3r8H
//! You can use this link to understand more => http://latentflip.com/loupe/
//! note: that website dont supppot ES.
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
// thats because Event Loop has 4 Multithreaded. hash() number five will wait unit the event loop be empty.


/*
1. As we said, Node.js is Synchronous → Single Thread → V8 Engine: V8 call stack.
2. If Node.js is Synchronous, then how to do Asynchronous operations?
   - By Asynchronous code handler, in Node.js named as Libuv.
3. Libuv has a component responsible for asynchronous execution.
4. This component is named Event-Loop (like a bus).
5. Libuv is Multithreading. 
6. Node.js in Sync is Single thread. → (V8 Engine)
7. Node.js in Async is Multi thread (4 threads). → (Libuv)
8. Async Steps:
   
   `V8 (Call Stack)` ⇒ `Libuv` ⇒ By the `Event Loop (bus)`, the `notification` goes from `Libuv` to `msg queue` to `V8`.


   |-------------|                                    |-----|
   |             |                                    |     |
   |             |                                    |     |
   |             |                                    |     |
   |V8 Call Stack|                                    |Libuv|
   |             |                                    |     |
   |             |                                    |     |
   |             |                                    |     |
   |-------------|                                    |-----|

   ⭕                                               ⭕
                |---------------------------------|
                |            MSG Queue            |
                |---------------------------------|

   *The red circle represents the Event Loop Bus 🚌.

   Explanation:
   In Node.js, asynchronous operations are managed using the Event Loop, powered by `libuv`. 
   When a function is called, it enters the V8 call stack. For async tasks, such as I/O operations, 
   Node.js offloads them to `libuv` (a thread pool with 4 threads by default). Once the task completes, 
   `libuv` notifies the Event Loop, which acts as a "bus" to transfer the result to the message queue. 
   The Event Loop then pushes the callback from the queue back to the V8 call stack for execution, ensuring efficient non-blocking behavior.
*/
