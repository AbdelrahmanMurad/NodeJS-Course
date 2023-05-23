/** Introduction (stat - Asynchronous)
 * stat: بتجيب معلومات عن ملف معين
 * (Path, callback)
 * Asynchronous
 */
const { stat } = require('fs')

stat('./02 - opendir.js', (err, state) => {
    console.log(state)
})

//===================================================================
//you can use this way instead:
/*
const fs = require('fs');

fs.stat('./02 - opendir.js', (err, state) => {
    console.log(state)
})
*/