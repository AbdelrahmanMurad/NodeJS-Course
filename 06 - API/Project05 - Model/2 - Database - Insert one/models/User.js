const { dbConnection } = require('../configurations');

class User {

    constructor(userData) {
        this.userData = userData;
    }

    save() {
        dbConnection('users', async (collection) => {
            await collection.insertOne(this.userData);
            //insertOne() add one document, input keyValue.
            //insert() adds documents, input arrayOfObjects. 
            //every object is document.
        });
    }

}

const user = new User({
    name: "John Smith",
    username: "John",
    password: "12345",
    email: "john@gmail.com"
});

user.save();
//if there is no user collection, it will be created and adds the document. (just in NoSQL)