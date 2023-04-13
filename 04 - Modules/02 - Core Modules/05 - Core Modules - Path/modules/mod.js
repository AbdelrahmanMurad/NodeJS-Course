console.log("Here is your Path, containing this file:\n" + __filename + "\n");
console.log("================================================" + "\n");
console.log("Here is your Operation Path:\n" + process.cwd());
/**
 * Note that output of process.cwd() is:
 * g:\abood\IUG\Year4\Section2\Software Development Frameworks - NodeJS\chs\IUG-Nodejs-Course
 *  - Last file is IUG-Nodejs-Course, Not modules.
 *  - So, we can say that the operation is ongoing in IUG-Nodejs-Course not modules.
 *     but the fn run & the location is in module .
 */