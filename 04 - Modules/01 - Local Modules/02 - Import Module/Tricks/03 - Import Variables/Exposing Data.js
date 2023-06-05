// import variables as import file
const secret = require('./configs/secret_keys.json')
console.log('server key is', secret.server_key)

// import variables as module
const dbConfig = require('./configs/database')
console.log('db host is', dbConfig.host)

// المقصد من هذا الفيديو
// لاي حاجة Exposing/Exportانو انا ممكن اعمل
// Module ممكن اخليها JSONيعني الداتا اللي ممكن تكون 