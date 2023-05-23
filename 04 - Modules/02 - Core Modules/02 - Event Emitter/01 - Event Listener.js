/** Introduction
 * Event Emitter => حدث يحدث والبرنامج مش شايفه، بتصل اشارة الى البرنامج
 *  باعث الحدث
 *  callStackيعني ما بتصير في ال
 *  example => onClick()
 * ------------------------
 * What is the deference between Event and Asynchronous??
 *  Asynchronous ->  اول ما تنتهي العملية Asyn الاشارة بتصل للبرنامج انو في عملية 
 *  Event -> اول ما تبدا العملية Event الاشارة بتصل للبرنامج انو في عملية 
 * ------------------------
 * Event Listener 
 */
const http = require('http')

const server = http.createServer();

//Event Listener => Asynchronous (Non-Blocking)
// To use Event listener => on() 
server.on('listening', () => {
    console.log('Server is listening now');
})
// هنا تم استقبال النتيجة

//Event
server.listen(3000); 
// listenهنا تم ارسال النتيجة من ال