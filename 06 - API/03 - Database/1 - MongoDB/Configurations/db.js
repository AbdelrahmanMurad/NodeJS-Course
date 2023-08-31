/** Intro: Code with details.
const { MongoClient } = require('Mongodb'); // reuiring MongoClient fn from Mongodb library.

// MongoClient => Fn to connect to database, and if my application is open, the connection will stay open, and if it was closed, the connection will close.

// const _uri = "mongodb+srv://Murado:Murado@cluster0.mthxkec.mongodb.net/    ?retryWrites=true&w=majority"; // connection string
// if you want to add new database, you can add it here =>               ☝⬆⬆☝
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
            //client same as MongoClient => makes the project connect to database.
            const db = client.db('nodejs_project').collection(collection);// connect to database nodejs_project. with the collection
            //opearations => add, edit, delete data.
            // Controllerكل الداتا حتجيني من برا واللي هو ال
            // callback اذا حنحتاج الجاسوس 
            await cb(db);
            //Table in NoSQL named as Collection. 
            //we need a collection(table). so it will be a parameter.
            client.close();// close connection
            // callback [ cb(db) ] of then() is an async process so we need to await it to be sync.
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

const { MongoClient } = require('mongodb');

// const _uri = "mongodb+srv://Murado:Murado@cluster0.lip3lu6.mongodb.net/nodejs_project?retryWrites=true&w=majority";
const _uri = "mongodb://localhost:27017"

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

dbConnection('users', async (db) => {
    const user = await db.findOne();
    console.log(user);
});

module.exports = dbConnection;

 /** db.js file 
 * 
 * 1- reuiring MongoClient Fn from Mongodb Library.
 *  ===> const { MongoClient } = require('mongodb');
 * 
 * ================================================================ 
 * 2- Connection String (global || local)
 *      => const _uri = "mongodb+srv://Murado:Murado@cluster0.lip3lu6.mongodb.net/nodejs_project?retryWrites=true&w=majority";
 *      => const _uri = "mongodb://localhost:27017"
 * 
 * ================================================================
 * 3- dbConnection = (collection, cb) => {
 *              /- MongoClient usage:
 *               -      MongoClient.connect()
 *               -                  .then()
 *               -                  .catch()
 *               -/  
 *      MongoClient.connect(_uri)
 *      .then(async (client) => {
 *              /- client usage:
 *               -      client.db().collectioon()
 *               -      client.close()
 *               -/   
 *      await cb(client.db('nameOfDatabaseOfCollections').collection(collection));
 *      client.close();
 *      })
 *      .catch(()=>{})
 *   }
 * 
 * ================================================================
 * 4- Test Connection
 *  dbConnection('nameOfCollection', async (db)=>{
 *      const name = await db.findOne();
 *      console.log(name);
 *  })
 * 
 * ================================================================
 * nameOfDatabaseOfCollections != nameOfCollection
 */