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
        // I/O operation
        return new Promise((resolve, reject) => {
            dbConnection('users', async (collection) => {
                try {
                    const user = await collection.findOne({
                        /* username: this.userData.username, 
                           email: this.userData.email 
                        this is and, we need or. */
                        '$or': [ //two conditions (output: arrayOfCondition)
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
    //why did you used promise?? (I/O operation)
    // To return a result.
    // & the dbconnection is async, and it will not return for the isExist() function. so we need to handle it with promise.
    // so when you use promise, the result of dbConnection will hand over to the promise.
    // why we didnt face this problem before? because there was (req,res,next) instead of return. (res for data) (next for error)


    static validate(userData) {
        return userVal.validate(userData);
    }

}