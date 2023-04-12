//Emitter => الخاصة في Eventsيسمحلي اعمل ال
const { EventEmitter } = require('events')

const myEmitter = new EventEmitter();

// To use Event listener => on() 
myEmitter.on('greeting', () => {
    //greeting => name of event listener.
    console.log('Hello to my app')
})

// Event ميزة من المزايا انو اعمل اكثر من 
// بالترتيب
myEmitter.on('greeting', name => {
    console.log(`Hello ${name}`)
})

// emitter
myEmitter.emit('greeting', 'Anas');

/** Notes:
 * 1- Pattern Event Driven: Eventsانو يكون التطبيق يعتمد على ال
 * 2- When to use Event Emitter??
 *    - when you need to do a Tracking on Asynchronous Operation.
 *    - So you need to send events to callStack.
 */