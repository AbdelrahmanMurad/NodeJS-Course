/** Fns in Path Module:
 * 
 *  Basename: Name of file
 * 
 *  Extname: Extension of file
 * 
 *  Parse: Infos about the file (output is object)
 * 
 */

const path = require('path')

console.log("Path:\n[ " + __filename + " ]");
console.log("--------------------------------");
console.log("Basename of Path:\n[ " + path.basename(__filename) + " ]");
console.log("--------------------------------");
console.log("Extname of Path:\n[ " + path.extname(__filename) + " ]");
console.log("--------------------------------");
console.log("Parsing Path:\n[ " + path.parse(__filename) + " ]");
console.log("--------------------------------");

//////////////////////

const { readFile } = require('fs');

readFile(path.join(__dirname, 'data', 'text.json'), 'utf8', (err, data) => {
    console.log(data)
})
//join() => بقدر اعطيه باراميترز قد ما بدي