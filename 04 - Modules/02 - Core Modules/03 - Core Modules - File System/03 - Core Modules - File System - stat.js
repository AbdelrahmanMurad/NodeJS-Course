/** Introduction
 * stat: بتجيب معلومات عن ملف معين
 * (Path, callback)
 * Asynchronous
 */
const { stat } = require('fs')

stat('./02 - Core Modules - File System - opendir.js', (err, state) => {
    console.log(state)
})