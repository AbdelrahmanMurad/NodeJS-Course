//! You MUST see the lecture.
//https://youtu.be/twdy1o8chLU?list=PLE5Mq0Nw_Flr1kMDtWmQYmAfURQpH3r8H
//! You can use this link to understand more => http://latentflip.com/loupe/
//! note: that website dont supppot ES.

const { pbkdf2 } = require('crypto');
const { createServer } = require('http');

const start = Date.now()

const hash = () => {
    pbkdf2('password', 'solt', 10000, 1000, 'sha256', () => {
        console.log('Hash', Date.now() - start)
    })
}

const lis = () => {
    createServer().listen(3000, () => {
        console.log('listening', Date.now() - start)
    })
}

hash();
hash();
hash();
hash();
lis();

// http://localhost:3000

/** Notes:
 * 1- OS Delegation: تفويض نظام التشغيل
 * 2- There is a third place (where executions happens) like V8(callStack) & libuv we can use it to some features in js, its the OS.
 * 3- Server(lis) is neither Sync nor Async. Server use OS not V8(callStack) & libuv.
 *          a)  Sync => V8(callStack).
 *          b)  Async => libuv.
 *          c)  Server => OS.
 * 6- Why Server => OS ??
 *          a) OS عملية قوية جدا وصعبة وكبيرة، اذا النود ما بتقدر تشغلها فبترميها لنظام التشغيل  Serverلان عملية تشغيل ال
 *          b) OSبل من اختصاص ال applicationمش من اختصاص ال serverال
 *          c)  ما بتخلص Serverولانه عملية تشغيل ال asyncLibuvحيضل حاجز ثريد طول ما السيرفر شغال لانه هاي وظيفة ال libuvلو حجز في ال
 *                               3Threads intead of 4 يحتوي على  Libuvبصير ال
 *          d) libuvحيضعف ال libuvلو اشتغل على ال
 * 7- Event-Loopمين بنقل العمليات او الكود ؟؟ الي بنقل هو ال 
 * 8- So:
 *      a) V8 for Sync Operations.
 *      b) Libuv for Async Operations.
 *      c) OS for OS Operations like Start a Server.
 * 9- Why lis() printed before hash() ?? || why server starts first ??
 *       - Because Event Loop (Bus) gives the priority to the server first.
 * 10- Server Steps: V8 - Libuv - OS -
 *                   Notification - 
 *                   Event Loop (Bus) Move server From Os to Libuv -
 *                   Event Loop (Bus) Move server From Libuv to msgQueue -
 *                   Event Loop (Bus) Move server From msgQueue to V8.
 *                   (The Hash Steps you Know it)
 */