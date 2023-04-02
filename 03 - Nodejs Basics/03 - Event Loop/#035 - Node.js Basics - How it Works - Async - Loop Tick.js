//! You MUST see the lecture.
//https://www.youtube.com/watch?v=R3HPKHJessc&list=PLE5Mq0Nw_Flr1kMDtWmQYmAfURQpH3r8H&index=35

const { pbkdf2 } = require('crypto')

const start = Date.now()

const hash = () => {
    pbkdf2('password', 'solt', 10, 1000, 'sha256', () => {
        console.log('Hash', Date.now() - start)
    })
}

setImmediate(() => {
    console.log('setImmediate', Date.now() - start)
}, "Educative")


hash();

process.nextTick(() => {
    console.log('nextTick', Date.now() - start)
})

hash();
hash();
hash();

/** Notes:
 * 1- Loop-Tick: Group of lines, every line execute in the exectution place that suitable for it. 
 * 2- Some in the V8.
 * 3- Sone in the Libvu.
 * 4- Some in the OS.
 * 5- If lines met in the msg queue from Libvu & OS, The first goes to the OS. 
 * 6- Loop-Tick: الوحدة iterationلفة ال
 * 7- Loop-Tick شو الأولويات اللي ماشي عليها ال
 * 8- 
 * 9- 
 */