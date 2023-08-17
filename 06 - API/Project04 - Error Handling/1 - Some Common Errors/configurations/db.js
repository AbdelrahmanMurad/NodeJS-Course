const { MongoClient } = require('mongodb');

const _uri = "mongodb://localhost:27017"; //localy

//TODO: (3) we need to Handle Error. instead of handling each promise, we can handle all of them in one time. => go to app.js
const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async (client) => {
            console.log("===> connection successful");
            await cb(client.db('nodejs_project').collection(collection))
            console.log("===> data is here");
            client.close()
            console.log("===> check the server");
        })
        .catch(() => { })
}

module.exports = dbConnection;