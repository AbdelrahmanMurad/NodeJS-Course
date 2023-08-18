const { dbConnection } = require('../configurations')

class Reviewer {
    constructor(userReviewer) {
        this.userReviewer = userReviewer;
    }

    save(cb) {
        dbConnection('reviewers', async (collecton) => {
            try {
                /*Part-1: Upsert  
                    const reviewer = collecton.findOne({
                        name: this.userReviewer.name,
                        _user_id: null
                    })

                    if (reviewer) {
                        collecton.updateOne(
                            { name: this.userReviewer.name },
                            { $set: { _user_id: this.userReviewer._user_id } }
                        )
                    } else {
                        await collecton.insertOne(this.userReviewer);
                    }
                */
                //part-2: Upsert
                await collection.updateOne(
                    { name: this.userReviewer.name, _user_id: null }, // (line one)
                    { $set: { _user_id: this.userReviewer._user_id, name: this.userReviewer.name } }, // (line two)
                    { upsert: true }
                )
                cb({
                    status: true,
                })
            } catch (error) {
                cb({
                    status: false,
                    message: error.message
                })
            }
        })
    }
}

module.exports = Reviewer;