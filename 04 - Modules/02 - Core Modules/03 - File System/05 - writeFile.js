/** Introduction (writeFirle - Asynchronous)
 * writeFile(Path, Content, Callback): الكتابة داخل ملف 
 * Asynchronous
 * فش اشي حيرجع لانو كتابة فقط 
 * Just input
 */
const { open, writeFile } = require('fs')

// عشان اتاكد انو الملف موجود
open('./data/text.txt', 'a+', (err, fd) => {
    //a+ => append => fileيعني كمل كتابة على اللي موجود في ال
    //fd => file descriptor.

    //if not exists
    if (err) {
        console.log(err)
        return;
    }

    //if exists
    writeFile(fd, '\nHello new writing from 27-7-2023', (err) => {
        if (err) {
            console.log(err)
        }
    })
})

/** Search:
 * - writeFileSync()
 * https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/
 * - openSync()
 * https://www.geeksforgeeks.org/node-js-fs-opensync-method/
 */

//===================================================================
//you can use this way instead:

/*
const fs = require('fs');
fs.open('./data/text.txt', 'a+', (err, fd) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.writeFile(fd, '\nHello from 23-5-2023', (err) => console.log(err));
})
*/