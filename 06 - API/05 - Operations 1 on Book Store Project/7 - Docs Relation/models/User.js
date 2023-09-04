const { dbConnection } = require('../configurations');
const { userVali } = require('../validators');
const { hashSync } = require('bcryptjs');

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
                    await collection.insertOne(this.userData)
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

}

module.exports = User;