const { dbConnection } = require('../configurations');
const { userVali } = require('../validators');

class User {

    constructor(userData) {
        this.userData = userData;
    }

    //------------------------handle async code error-----------------------------
    /**with promise:
    save() {
        return new Promise((resolve, reject) => {
            dbConnection('users', async (collection) => {
                try {
                    await collection.insertOne(this.userData);
                    resolve({
                        status: true
                    });
                } catch (error) {
                    reject({
                        status: false,
                        message: error.message
                    });
                }
            });

        })
    }
     */

    // callback
    save(cb) {
        dbConnection('users', async (collection) => {
            try {
                await collection.insertOne(this.userData)
                cb({
                    status: true
                });
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