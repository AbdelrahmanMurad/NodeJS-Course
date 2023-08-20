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
            const valiResult = loginVali.validate(loginData);
            if (valiResult.error) {
                resolve({
                    status: false,
                    message: validation.error.message,
                    code: 400
                })
            }
            /*Part 1: Join - (1) => fetch user, then fetch reviewer. (independently بشكل مستقل)
                dbConnection('users', async (collection) => {
                    try {
                            const user = await collection.findOne(
                                 { username: loginData.username }
                                // { projection: { username: 1, password: 1 } }
                            )
                            //JOIN
                            if (user) {
                                if (compareSync(loginData.password, user.password)) {
                                    dbConnection('reviewers', async (relatedCollection) => {
                                        const reviewer = await relatedCollection.findOne(
                                            { _user_id: user._id }
                                            //condition
                                        )
                                        if (reviewer) {
                                            // return user.reviewer = reviewer; => wrong
                                            user.reviewer = reviewer; // => we are not returning here. => the return will make the request in hold (request sending) 
                                            // put the reviewer data in user data.
                                        }
                                        resolve({
                                            status: true,
                                            data: user
                                        })
                                    })
                                    //التانية dbConnectionداخل ال resolveلاحظ انو نقلنا ال
                                } else {
                                    resolve({
                                        status: false,
                                        message: 'Login Failed',
                                        code: 401
                                    })
                                }
                            } else {
                                resolve({
                                    status: false,
                                    message: 'Login Failed',
                                    code: 401
                                })
                            }
                    } catch (error) {
                        reject({
                            status: false,
                            message: error.message
                        })
                    }
                })
            */
            //part 2: Join - (2) => make a connect from mongoDB between two collections. (aggregation تجميع => array of objects)
            dbConnection('users', async (collection) => {
                try {
                    //aggregate([]) => output is array of objects => merging the data we need between two collections.
                    const dbResult = await collection.aggregate([
                        {
                            $lookup: { // lookup object takes multiple fields.
                                from: 'reviewers',
                                //form field: Name of related collection: we need to merge the Related Collection (second collection) with the Main Collection (first collection).
                                localField: '_id',
                                //localField: name of key in the Main Collection. => in SQL: Primary Key
                                foreignField: '_user_id',
                                //foreignField: name of key in the Related Collection. => in SQL: Foreign Key
                                as: 'reviewer'
                                //as field: name of related document => انت حر في اختيار الاسم
                            }
                        },
                        {
                            $match: { //condition
                                username: loginData.username
                            }
                        },
                        {// to make sure of users number in the result
                            $limit: 1
                            //in the if statement: const user = dbResult[0];
                        }
                    ]).toArray()

                    if (dbResult) {
                        /** The problem in aggregate method:  
                         *      1- findOne()وليس ال find()انها تتعامل مع الداتا مثل ال 
                         *          - المطلوب فقط userمش ال usersهيك هي بتجيب كل ال 
                         *          - Solution: Add Condition => match object, you can add limit of users too. (match & limit objects)
                         *      2- arrayواحنا بدنا نشيل ال arrayانها بتجيب الداتا في ال (data in list)
                         *          - Solution: select the first object in the array to each collections, so the output will be (object) not (array of objects).
                         *          -                  const user = dbResult[0];
                         *          -                  user.reviewer = (user.reviewer) ? user.reviewer[0] : null

                         */
                        //first user (first object)
                        const user = dbResult[0];

                        // make sure from password
                        if (!user || !compareSync(loginData.password, user.password)) {
                            resolve({
                                status: false
                            })
                        }

                        //first reviewer (first object)
                        user.reviewer = (user.reviewer) ? user.reviewer[0] : null
                        // if (user.reviewer) { user.reviewer = user.reviewer[0] } else { user.reviewer = null }
                        // if user.reviewer exist
                        resolve({
                            status: true,
                            data: user
                        })
                    } else {
                        resolve({
                            status: false
                        })
                    }

                } catch (error) {
                    reject({
                        status: false,
                        message: error.message
                    })
                }
            })
        })
    }
}

module.exports = User;