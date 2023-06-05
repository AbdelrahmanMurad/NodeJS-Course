const { dbConnection } = require('../configurations');
const { userVal } = require('../validators');
const { message } = require('../validators/user');

class User {

    constructor(userData) {
        this.userData = userData;
    }

    save() {
        dbConnection('users', async (collection) => {
            await collection.insertOne(this.userData);
        });
    }

    isExist() {
        return new Promise((resolve, reject) => {
            dbConnection('users', async (collection) => {
                try {
                    const user = await collection.findOne({
                        '$or': [ //two conditions
                            { username: this.userData.username },
                            { email: this.userData.email }
                        ]
                    })

                    if (!user) {
                        //here if you used return, the return will be for if statement. not for the isExist() fn
                        resolve({
                            check: false
                        })
                    } else {
                        if (user.email === this.userData.email) {
                            //here if you used return, the return will be for if statement. not for the isExist() fn
                            resolve({
                                check: true,
                                message: 'The email is already used'
                            })
                        } else if (user.username === this.userData.username) {
                            //here if you used return, the return will be for if statement. not for the isExist() fn
                            resolve({
                                check: true,
                                message: 'The username is already used'
                            })
                        }
                    }
                } catch (err) {
                    reject(err)
                }
            })
        })
    }
    //why did you used promise??
    // To return a result.
    // & the dbconnection is async, and it will not return for the isExist() function. so we need to handle it with promise.
    // so when you use promise, the result of dbConnection will hand over to the promise.
    // why we didnt face this problem before? because there was (req,res,next) instead of return. (res for data) (next for error)


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