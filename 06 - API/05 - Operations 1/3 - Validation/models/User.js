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
        return userVal.validate(userData);
    }

}

const userData = {
    name: "John Smith",
    username: "John",
    password: "12245aswqAA6",
    // password: "122456",
    email: "john@gmail.com"
}

//Instance
const user = new User(userData);

// const valResult = user.validate(userData);// error meassage => user.validate is not a function => because validate is static.
// // (static => Instanceوليس بال classمرتبطة بال)
// const valResult = User.validate(userData);// {User} is name of class => because validate is static.
// // (static => Instanceوليس بال classمرتبطة بال)
// console.log(valResult);


// if (valiResult.error) {
//     //validation wrong
// } else {
//     user.save();
// }