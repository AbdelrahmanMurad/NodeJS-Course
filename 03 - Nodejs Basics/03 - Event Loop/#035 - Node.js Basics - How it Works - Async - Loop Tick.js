//! You MUST see the lecture.
//https://www.youtube.com/watch?v=R3HPKHJessc&list=PLE5Mq0Nw_Flr1kMDtWmQYmAfURQpH3r8H&index=35
//! You can use this link to understand more => http://latentflip.com/loupe/
//! note: that website dont supppot ES.

const { pbkdf2 } = require('crypto');

const start = Date.now();

const hash = () => {
    // pbkdf2('password', 'solt', 10, 1000, 'sha256', () => {
    pbkdf2('123456**', '##', 1, 100, 'sha256', () => {
        console.log('Hash', Date.now() - start)
    })
}

setImmediate(() => {
    console.log('setImmediate', Date.now() - start)
}, "Educative")


hash();
hash();

process.nextTick(() => {
    console.log('nextTick', Date.now() - start)
})

hash();
hash();
// من الاخر الموضوع مش زابط
/** Notes:
 * 1- Loop-Tick: Group of lines, every line executes in the exectution place that suitable for it. 
 *      a) Some in the V8. 
 *      b) Sone in the Libvu.
 *      c) Some in the OS.
 *      d) Lines will be met in the msgQueue from Libvu & OS, The first goes to the OS, and thats by the Event loop (bus) in iteration. 
 * 2- Loop-Tick => one iteration => Tick means لفة
 * 3- Loop-Tickفي كل EventLoopشو الأولويات اللي بمشي عليها ال ??
 *      1) Timers. 
 *             - callback of setTimeout or setInterval. 
 *             - بتركها للفة التالية return لو مخلصش وما رجع  cbبياخد ال return هدول، لو رجعو methodsفي اللفة الحالية: بشيك على ال
 *      2) Pending Callbacks.
 *             - callbacks in threadPool => still/waiting/in-thread. 
 *             - threadPool: the 4 threads in the async operations.
 *             - Checks if the threadPool is empty or not.
 *      3) Poll.
 *             - done callbacks. 
 *             - like we took in lifecycle of Event Loop(V8, Libuv, OS).
 *      4) Check.
 *             - Callback of setImmediate.
 * ===================================================================
 * 4- setImmediate(); => name means: اعطاء شيء أولوية قصوى
 *         - الاسم ملهوش علاقة بالشغل بتاتا
 *         - الحالية Tickالوظيفة: سيتم تنفيذ العملية اخر ال
 *         - التالية Tickاو في بداية ال
 *         - وهاي نقطة مهمة جدا: انها لا تتأجل الى اخر البرنامج، بل تتأجل الى اخر اللفة الحالية او الى بداية اللفة التالية
 *         - كمان مرة بناكد انو الاسم ملهوش علاقة بالوظيفة
 * ===================================================================
 * 5- process.nextTick(); => name means: التالية Tickتأجيل الشيء لل
 *         - الاسم ملهوش علاقة بالشغل بتاتا 
 *         - الحالية Tickالوظيفة: سيتم تنفيذ العملية في اول ال
 *         - ولكن مش بالاول خالص
 *         - setImmediate() حسب ايش في قبلها، ممكن يكون في عملية قبلها، فالاولوية للعملية، ما عدا ال
 *         - كمان مرة بناكد انو الاسم ملهوش علاقة بالوظيفة 
 *         - Example-1:
 *                      a) async function.
 *                      b) setImmediate().
 *                      c) nextTick().
 *                      d) async function.
 *                      e) async function.
 *                  - Order: a - c - d - e - b.
 *         - Example-2:
 *                      a) async function.
 *                      b) setImmediate().
 *                      c) async function.
 *                      d) async function.
 *                      e) nextTick().
 *                  - Order: a - e - c - d - b.
 * !        - Example-3:
 *                      a) setImmediate().
 *                      b) async function.
 *                      c) async function.
 *                      d) async function.
 *                      e) nextTick().
 *                  - Order:  -  - c - d - a.
 * ===================================================================
 * 6- Important Note: whether setImmediate() or process.nextTick()
 *       - ممكن تيجي عملية تاخد وقت اطول من الميثود السابق
 *       - فيتم تنفيذها بعد الميثود
 *       - وممكن في اللفة التالية، حسب المدة الزمنية للعملية
 *       - معنى ذلك
 *       - ما تكون اخر اشي setImmediateانو ممكن ال      
 *       - تكون اول اشي process.nextTickوممكن ال 
 *       - حسب المدة الزمنية للعملية
 */