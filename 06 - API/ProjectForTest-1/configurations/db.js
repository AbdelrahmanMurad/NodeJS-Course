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

const { MongoClient } = require('mongodb');

const _uri = 'mongodb://localhost:27017';

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

// dbConnection('books', async (db) => {
//     const book = await db.findOne();
//     console.log(book);
// });


module.exports = dbConnection;