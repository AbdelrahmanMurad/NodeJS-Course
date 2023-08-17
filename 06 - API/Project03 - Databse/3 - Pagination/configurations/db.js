const { MongoClient } = require('mongodb');

// const _uri = "mongodb+srv://Murado:Murado@cluster0.lip3lu6.mongodb.net/nodejs_project?retryWrites=true&w=majority";
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

dbConnection('books', async (db) => {
    const book = await db.findOne();
    console.log(book);
});


module.exports = dbConnection;