/** Introduction
 * writeFile(Path, Content, Callback): الكتابة داخل ملف 
 * Asynchronous
 * فش اشي حيرجع لانو كتابة فقط 
 * Just input
 */
const { open, writeFile } = require('fs')

//عشان اتاكد انو الملف موجود
open('./data/text.txt', 'a+', (err, fd) => {
    //a+ => append => fileيعني كمل كتابة على اللي موجود في ال
    //fd => file descriptor.

    //if not exists
    if (err) {
        console.log(err)
        return;
    }

    //if exists
    writeFile(fd, 'Hello new writing', (err) => {
        if (err) {
            console.log(err)
        }
    })
})

/** Search on:
 * - writeFileSync()
 * - openSync()
 */