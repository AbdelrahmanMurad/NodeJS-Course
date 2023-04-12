/** Introduction
 * Open directory: fetch content for any directory.
 * (Path, callback)
 * Asynchronously
 * --------------------------
 * output of opendir() is: list of directory => you need loop(forOf). (fetching content of dir)
 * --------------------------
 * for(let varName of dir){
 *     code
 * }
 * --------------------------
 * loop1 -> varName = itemName1
 * loop2 -> varName = itemName2
 * loop3 -> varName = itemName3
 * So on,
 */
const { opendir } = require('fs')

// opendir('./', (err, dir) => {
//     for (let dirent of dir) {
//         console.log(dirent.name)
//     }
// })
//There is a problem in previous code, that is the opendir() & callback function is async.
//Remember we cant write async inside async. So the Solution is: The next Code.
opendir('./', async (err, dir) => {
    for await (let dirent of dir) {
        console.log(dirent.name)
    }
})