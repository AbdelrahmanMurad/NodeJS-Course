/** Intro: Code with details.
const { MongoClient } = require('Mongodb');

// MongoClient => Fn to connect to database, and if my application is open, the connection will stay open, and if it was closed, the connection will close.

// const _uri = "mongodb+srv://Murado:Murado@cluster0.mthxkec.mongodb.net/    ?retryWrites=true&w=majority"; // connection string
// if you want to add new database, you can add it here                  ☝⬆⬆☝
// you can pick this uri(connection string) from overview in mongodb.

- uri in detail:
    - mongodb+srv =>  connect to MongoDB.
    - Murado:Murado => username:password
    - @cluster0.mthxkec.mongodb.net => link of server from MongoDB.
    - nodejs_project => name of database of collections
 
================================================================================

const _uri = "mongodb+srv://Murado:Murado@cluster0.lip3lu6.mongodb.net/nodejs_project?retryWrites=true&w=majority";

const dbConnection = (collection, cb) => {
    // MongoClient.connect()// returns promise, so to handle it you can use async/await in .then()
    MongoClient.connect(_uri)
        .then(async (client) => {
            //client same as MongoClient => make project connect to database.
            const db = client.db('nodejs_project').collection(collection);// connect to database nodejs_project. with the collection
            //opearations => add, edit, delete data.
            // Controllerكل الداتا حتجيني من برا واللي هو ال
            // callback اذا حنحتاج الجاسوس 
            await cb(db);
            //Table in NoSQL named as Collection. 
            //we need a collection(table). so it will be a parameter.
            client.close();// close connection
            // callback [ cb(db) ] of then is an async process so we need to await it to be sync.
            // async\await => يخلص cbما تسكر الشغل الا لما ال
        })
        .catch(() => { })
}

//?test connection
dbConnection('employees', async (db) => {
 //name of collection is sensitive.
    const employee = await db.findOne(); //findOne() => return first employee in employees collection
    console.log(employee);
});

*/

// Same Code without details. => to be cleared.

const { MongoClient } = require('Mongodb');

const _uri = "mongodb+srv://Murado:Murado@cluster0.lip3lu6.mongodb.net/nodejs_project?retryWrites=true&w=majority";

const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async (client) => {
            const db = client.db('nodejs_project').collection(collection);
            await cb(db);
            // await cb(client.db().collection())
            client.close();
        })
        .catch(() => { })
}

dbConnection('employees', async (db) => {
    const employee = await db.findOne();
    console.log(employee);
});


module.exports = dbConnection;

/** dbConnection(collection, cb)
 * 1- MongoClient.connect(_uri).then().catch()
 * 2- .then(async (client)=>{
 *          await cb(client.db(nameOfDatabaseOfCollections).collection(collectionName))
 *          client.close();
 * })
 * 3- .catch(()=>{});
 * ========================== test
 * 1- dbConnection(collectionName, (db)=>{
 * 2-     const name = db.findOne();
 *      console.log(name);
 * });
 * 3- dbConnection(collectionName, async (db)=>{
 *      const name = await db.findOne();
 *      console.log(name);
 * });
 */