const { dbConnection } = require('../configurations');

class Reviewer {

    constructor(reviewerData) {
        this.reviewerData = reviewerData;
    }

    save(cb) {
        dbConnection('reviewers', async (collection) => {
            try {
                await collection.insertOne(this.reviewerData);
                cb({
                    status: true
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