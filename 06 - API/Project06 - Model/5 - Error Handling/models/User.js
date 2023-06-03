const { dbConnection } = require('../configurations');
const { userVal } = require('../validators');

class User {

    constructor(userData) {
        this.userData = userData;
    }

    save() {
        try {
            dbConnection('users', async (collection) => {
                await collection.insertOne(this.userData);
            })
        } catch (err) {
            // return err;
            return {
                status: false,
                error: err.message
            }
            return { status: true }
        };
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
            const valiResult = userVal.validate(userData);
            return valiResult;
        }
        catch (err) {
            return false;
        }
    }

}

const userData = {
    name: "John Smith",
    username: "John",
    password: "12245aswqAA6",
    email: "john@gmail.com"
}

//Object user
const user = new User(userData);