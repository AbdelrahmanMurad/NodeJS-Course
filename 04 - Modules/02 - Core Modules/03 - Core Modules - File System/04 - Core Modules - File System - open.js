/** Introduction
 * Open(Path, Callback): بشوف اذا الملف موجود ولا لا
 * Buffer برجع على شكل 
 * Asynchronous
 */
const { open } = require('fs')

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