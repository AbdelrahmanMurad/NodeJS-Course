const { MongoClient } = require('mongodb');

//******
const _uri = process.env.MONGODB_URI; //localy

const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async client => {
            //******
            await cb(client.db(process.env.MONGODB_DB).collection(collection));
            client.close();
        })
        .catch(err => console.log(err))
}

module.exports = dbConnection;