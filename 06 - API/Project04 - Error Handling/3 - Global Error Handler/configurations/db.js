const { MongoClient } = require('mongodb');

const _uri = "mongodb://localhost:27017"; //localy

//? (3) we need to Handle Error. instead of handling each promise, we can handle all of them in one time. => go to app.js
const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async client => {
            await cb(client.db('nodejs_project').collection(collection));
            client.close();
        })
        .catch(err => console.log(err))
}

module.exports = dbConnection;

/** dbConnection(collection, cb)
 * 1- MongoClient.connect().then().catch()
 * 2- .then(async (client)=>{
 *          await cb(client.db('nameOfDatabaseOfCollections').collection(collection);)
 *          client.close();
 * })
 * 3- .catch(()=>{});
 * ========================== test
 * 1- dbConnection('collectionName', (db)=>{
 * 2-     const name = db.findOne();
 *      console.log(name);
 * });
 * 3- dbConnection('collectionName', async (db)=>{
 *      const name = await db.findOne();
 *      console.log(name);
 * });
 */