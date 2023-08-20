const { MongoClient } = require('mongodb');

const _uri = "mongodb://localhost:27017"; //localy

const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async client => {
            await cb(client.db('nodejs_project').collection(collection));
            client.close();
        })
        .catch(err => console.log(err))
}

module.exports = dbConnection;