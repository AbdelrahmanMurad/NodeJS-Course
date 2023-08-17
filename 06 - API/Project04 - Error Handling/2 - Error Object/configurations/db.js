const { MongoClient } = require('mongodb');

const _uri = "mongodb://localhost:27017"; //localy

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