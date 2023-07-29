/** Introduction (open - Asynchronous)
 * Open(Path, Callback): بشوف اذا الملف موجود ولا لا
 * Buffer برجع على شكل 
 * Asynchronous
 */
const { readFile, open } = require('fs')

open('./data/text.txt', (err, fd) => {
    //fd => file descriptor.

    //if not exists
    if (err) {
        console.log(err)
        return;
    }

    //if exists
    readFile(fd, 'utf8', (err, content) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(content)
    })
})

//===================================================================
//you can use this way instead:
/*
const fs = require('fs')
fs.open('./data/text.txt', (err, fd) => {

    if (err) {
        console.log(err)
        return;
    }

    fs.readFile(fd, 'utf8', (err, content) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(content)
    })
})
*/