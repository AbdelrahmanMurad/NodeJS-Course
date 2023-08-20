const { ValidationError } = require('@hapi/joi/lib/errors');
const { dbConnection } = require('../configurations');
const { userVali, loginVali } = require('../validators');
const { hashSync, compareSync } = require('bcryptjs');

class User {
    constructor(userData) {
        this.userData = userData;
    }

    save(cb) {
        dbConnection('users', async (collection) => {
            try {
                const hashedPassword = hashSync(this.userData.password);
                this.userData.password = hashedPassword;
                /*Part-1: Docs Relation
                    await collection.insertOne(this.userData);
                    // const newUser = collection.findOne({ name: this.userData.name }) //or any of this (email, username, pass)
                    const newUser = collection.findOne({ email: this.userData.email })
                    cb({
                        status: true,
                        _user_id: newUser._id
                        //من الداتابيز نفسها _idهيك انت جبت ال
                    });
                */
                //part-2: Docs Relation
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
                        resolve({
                            check: false
                        })
                    } else {
                        if (user.email === this.userData.email) {
                            resolve({
                                check: true,
                                message: 'The email is already used'
                            })
                        } else if (user.username === this.userData.username) {
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

    static validate(userData) {
        try {
            const valiResult = userVali.validate(userData);
            return valiResult;
        }
        catch (err) {
            return false;
        }
    }

    static login(loginData) {
        return new Promise((resolve, reject) => {

            //validation for login => user.js (validators)
            const valiResult = loginVali.validate(loginData);
            if (valiResult.error) {
                // we can use reject, but reject is for exception. and this is not an exception.
                resolve({
                    status: false,
                    message: validation.error.message,
                    code: 400
                })
            }

            //dbConnection
            dbConnection('users', async (collection) => {
                try {

                    const user = await collection.findOne(
                        { username: loginData.username },
                        // password: loginData.password
                        // we cant use password, because its stored in mongoDB encrypted.
                        { projection: { username: 1, password: 1 } }
                        //Selecting what you want to return from the data.
                        // 1 => true, 0 => false
                        // if you dont want to return the id => _id: 0 
                    )

                    //if user account exists, compare between encrypted password & decrypted password.
                    if (user) {
                        if (compareSync(loginData.password, user.password)) {
                            //loginData.password => decrypted
                            //user.password => encrypted (in mongoDB)
                            resolve({
                                status: true,
                                data: user
                            })
                        }
                    }

                    // we can use reject, but reject is for exception. and this is not an exception.
                    resolve({
                        status: false,
                        message: 'Login Failed',
                        code: 401
                    })

                } catch (error) {
                    reject({
                        status: false,
                        message: error.message
                    })
                }

            })
        })
    }
    // ؟؟ promiseليش استخدمنا ال
    // يرجع داتا login() function واحنا محتاجين انو ال return لانه فش 
    // promise or callback وهاي بتنحل اما بال
    // try()catch() for handling
    // ؟؟  login() functionكيف حنستخدم ال
    // auth controller <= req,res,next 
    // auth controller has signup() & login().
    // auth routes for making a route.
}

module.exports = User;