/** Introduction
 * Streams: Intermediary channel to Transform data between two sides.
 *  - Sides: Sender and Reciver
 *  - without stream, If size of data is so big, Transform will be a problem. 
 *  - stream will be used to store on it data chunk by chunk until the end.
 * When To Use: 
 *   - Transform data from file to file.
 *   - Between client and server.
 * Types:
 *   - read
 *   - write
 *   - dublex
 *   - transform
 * read & write works togthere because you need to transform data from file to file.
 */

// an example for transform data from file to file

const { createReadStream, createWriteStream } = require('fs')

const readStream = createReadStream('./data/input.txt')

const writeStream = createWriteStream('./data/output.txt')

// غلط انو اخلي العمليتين هدول يشتغلوا لحالهم، لازم مع بعض

//pipe بتخلينا نشغل العمليات مع بعض
//pipe انبوبة
readStream.pipe(writeStream)
// without pipe => conflict may happen.

//Note: Transform means same data in all sides.