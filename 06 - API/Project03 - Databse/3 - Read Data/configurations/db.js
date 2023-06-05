const { MongoClient } = require('Mongodb');

const _uri = "mongodb+srv://Murado:Murado@cluster0.lip3lu6.mongodb.net/nodejs_project?retryWrites=true&w=majority";

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