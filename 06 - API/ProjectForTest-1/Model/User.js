const { dbConnection } = require("../configurations");
const { userValidation } = require('../validation');
const { hashSync } = require('bcryptjs');

class User {
    constructor(userData) {
        this.userData = userData;
    }

    //you can handle async code error either with promise or callback.
    save(cb) {
        dbConnection('users', async (collection) => {
            try {
                const hashedPassword = hashSync(this.userData.password);
                this.userData.password = hashedPassword;

                /*Part-1: Docs Relation
                    await collection.insertOne(this.userData)
                    // const newUser = collection.findOne({ name: this.userData.name }) //or any of this (email, username, pass)
                    const newUser = collection.findOne({ email: this.userData.email })
                    cb({
                        status: true,
                        _user_id: newUser._id
                        //من الداتابيز نفسها _idهيك انت جبت ال
                    });
                */
                //Part-2: Docs Relation
                //insertOne return promise
                await collection.insertOne(this.userData)
                    .then((result) => {
                        cb({
                            status: true,
                            _user_id: result.insertedId
                            //من الداتابيز نفسها _idهيك انت جبت ال
                        });
                    })
            } catch (error) {
                cb({
                    status: false,
                    message: error.message
                })
            }
        })
    }
    static validate(userData) {
        try {
            // return userValidation.valid(userData) => dont use schema
            return userValidation.validate(userData);
        } catch (error) {
            return false;
        }
    }

    isExist() {
        //I/O operation
        return new Promise((resolve, reject) => {
            dbConnection('users', async (collection) => {
                try {
                    const user = await collection.findOne({
                        '$or': [
                            { username: this.userData.username },
                            { email: this.userData.email }
                        ]
                    })

                    if (!user) {
                        resolve({
                            check: false
                        })
                    } else {
                        if (user.username === this.userData.username) {
                            resolve({
                                check: true,
                                message: 'username is already used'
                            })

                        } else if (user.email === this.userData.email) {
                            resolve({
                                check: true,
                                message: 'email is already used'
                            })
                        }
                    }
                } catch (error) {
                    reject(error);
                }
            })
        })
    }

}

module.exports = User;