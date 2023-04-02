//! You MUST see the lecture.
//https://www.youtube.com/watch?v=twdy1o8chLU&list=PLE5Mq0Nw_Flr1kMDtWmQYmAfURQpH3r8H&index=34

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
 * 2- There is a third place (where executions happens) like call-stack & libuv we can use it to some features in js, its the OS.
 * 3- Server(lis) is neither Sync nor Async. server uses OS not stack & not libuv.
 * 4- Server Steps: V8 - Libuv - OS - OS - Libuv - msg queue - V8. (Event-Loop is the bus)
 * 5- Why??
 *      a- OS عملية قوية جدا وصعبة وكبيرة، اذا النود ما بتقدر تشغلها فبترميها لنظام التشغيل  Serverلان عملية تشغيل ال
 *      b- OSبل من اختصاص ال applicationمش من اختصاص ال serverال
 *      c- ما بتخلص Serverولانه عملية تشغيل ال async libuvحيضل حاجز ثريد  لانه هاي وظيفة ال libuvلو حجز في ال
 *      d- libuvحيضعف ال libuvلو اشتغل على ال
 * 6- Event-Loopمين بنقل العمليات او الكود ؟؟ الي بنقل هو ال 
 * 7- So:
 *      a- V8 for Sync Operations.
 *      b- Libuv for Async Operations.
 *      c- OS for OS Operations like Start a Server.
 */