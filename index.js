const { opendir } = require('fs');


console.log('nodemon is succesfuly, but you cant use nodemon in this course because of the folders:');

opendir('./', async (err, dir) => {
    for await (let d of dir) {
        console.log(d.name)
    }
})