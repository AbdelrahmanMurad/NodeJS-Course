const { dbConnection } = require('../configurations')

class Reviewer {
    constructor(userReviewer) {
        this.userReviewer = userReviewer;
    }

    save(cb) {
        dbConnection('reviewers', async (collecton) => {
            try {
                await collecton.insertOne(this.userReviewer);
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