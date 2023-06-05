const { MongoClient } = require('Mongodb');

// const _uri = "mongodb+srv://Murado:Murado@cluster0.lip3lu6.mongodb.net/nodejs_project?retryWrites=true&w=majority";
const _uri = "mongodb://localhost:27017"; //localy

const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async client => {
            await cb(client.db('nodejs_project').collection(collection));
            client.close();
        })
        .catch(err => console.log(err))
}


dbConnection('books', async (db) => {
    const book = await db.findOne();
    console.log(book);
});


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