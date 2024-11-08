/** Introduction
 * - There is 2 Types Of Executions: Sync and Async (background).
 * -- background means => ما بتنشاف لا من اليوزر ولا من المبرمج
 * -- Async Like Multithreaded, Threads Excutes in Background.
 * -- JS is Single-Threaded.
 * 
 * - There is 2 Types Of Operations: Blocking vs Non-Blocking.
 * -- Blocking => Syncغالبا تتنفذ في ال
 * --- If there is a hold or problem in a line of the code, the program\compiler will stop executing, until it solve it.
 * --- يعني من الاخر البرنامج بوقف مدة معينة من الزمن   (Syncronus متزامن)
 * -- Non-Blocking => Async ما بتوقف تنفيذ البرنامج اي انه 
*/

console.log(1);//(blocking - sync) operation
console.log(2);//(blocking - sync) operation

/**//*Asyncronous processes [non-blocking operations]:
 *      1- Timer.
 *      2- long-time process.
 *      3- I/O operations (files, DB, API's).
 *          - I/O[input/output] operations means => Read/Write operations.
 *      4- async word. 
 * =================================================================
 * 1&2&3 => Automatic.
 * 4 => not automatic.
 */

// (non-blocking - async) operation
setTimeout(() => {
    console.log('async operation');
}, 1000); 

console.log(3);//(blocking - sync) operation
console.log(4);//(blocking - sync) operation

/** Notes:
 * 1- The Best Choice For Async Operation Is JS.
 * 2- setTimeout(handler, timeout).
 */