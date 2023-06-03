const { dbConnection } = require('../configurations');
const { userVal } = require('../validators');

class User {

    constructor(userData) {
        this.userData = userData;
    }

    save() {
        dbConnection('users', async (collection) => {
            await collection.insertOne(this.userData);
        });
    }

    /**
       * ?1 normal way
       * if (this.userData.name !== '' && this.userData.username.length > 4){
       * code 
       *  }
       * ?2 npm i @hapi/joi => libraries (there is many)
       * its better to split it another floder.
    */
    static validate(userData) {
        const valiResult = userVal.validate(userData);
        return valiResult;
    }

}


const userData = {
    name: "John Smith",
    username: "John",
    password: "12245aswqAA6",
    // password: "122456",
    email: "john@gmail.com"
}

//Object user
const user = new User(userData);

//try these logs:
// To Run: node models/user.js

// console.log(user.validate(userData));// will print value & error meassage

// const valResult = user.validate(userData);// fail => wont work
const valResult = User.validate(userData);// {User} is name of class => because validate is static.
// static: objectوليس بال classمرتبطة بال
console.log(valResult);


// if (valiResult.error) {
//     //validation wrong
// } else {
//     user.save();
// }