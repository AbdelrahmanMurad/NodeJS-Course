console.log("Here is your Path, containing this file:\n" + __filename + "\n");
console.log("================================================" + "\n");
console.log("Here is your Operation Path:\n" + process.cwd());
/**
 * Note that output of process.cwd() is:
 *                      g:\abood\IT\Courses\6.Node js\NodeJS-Course
 *  - Last file is NodeJS-Course, Not modules.
 *  - So, we can say that the operation is ongoing in NodeJS-Course not modules.
 *     but the fn run & the location is in module.
 */