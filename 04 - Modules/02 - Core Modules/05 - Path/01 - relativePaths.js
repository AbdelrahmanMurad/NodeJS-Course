// const story = require('./data/text.json') // ./ => local module
// console.log(story)

/** In Terminal: Try to run the code in each path.
 * 1- Path1: 
 *  G:\abood\IT\Courses\6.Node js\NodeJS-Course\04 - Modules\02 - Core Modules\05 - Path>\modules>
 * 2- Path2: 
 *  G:\abood\IT\Courses\6.Node js\NodeJS-Course\04 - Modules\02 - Core Modules\05 - Path>
 * =================================================================
 * Success in two Paths.
 */

///////////////

const { readFile } = require('fs')

// this relative path is relative to when run "node"
readFile('./data/text.json', 'utf8', (err, data) => {
    console.log(err)
    console.log(data)
})

/** In Terminal: Try to run the code in each path.
 * 1- Path1: 
 *  G:\abood\IT\Courses\6.Node js\NodeJS-Course\04 - Modules\02 - Core Modules\05 - Path>\modules>
 * 2- Path2: 
 *  G:\abood\IT\Courses\6.Node js\NodeJS-Course\04 - Modules\02 - Core Modules\05 - Path>
 * =================================================================
 * Success in path 1.
 * Failure in path 2.
 */

//What is the Solution for this problem?? Node mod, we will take it in the future.