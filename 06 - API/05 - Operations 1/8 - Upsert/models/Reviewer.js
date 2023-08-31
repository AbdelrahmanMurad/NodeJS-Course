const { dbConnection } = require('../configurations');


class Reviewer {
    constructor(reviewerData) {
        this.reviewerData = reviewerData;
    }

    save(cb) {
        dbConnection('reviewers', async (collection) => {
            try {
                /*Part-1: Update  
                //Update reviewer if reviewer doesnt has a _user_id. 
                    const reviewer = collecton.findOne({
                        name: this.reviewerData.name,
                        _user_id: null
                          // or you can use this according to mongoDB conditions:
                          //  _user_id: { $exists: false, $ne: null }
                          //          - condition one: {$exists: false} => means => not found, {$exists: true} means found.
                          //          - condition two: {$ne: null} => means => not null (this used if the $exists is true) => so if false you dont need $ne => so it will be { $exists: false }
                    })

                    if (reviewer) {
                        collecton.updateOne(
                            { name: this.reviewerData.name },
                            { $set: { _user_id: this.reviewerData._user_id } }
                        )
                        // updateOne({}, {}) takes two parameters:
                        //      two objects: - the condition.
                        //                   - the query you want to update.
                    } else {
                        await collecton.insertOne(this.reviewerData);
                    }
                */
                //part-2: Upsert
                //Update(Upsert) reviewer if reviewer doesnt has a _user_id. 
                await collection.updateOne(
                    { name: this.reviewerData.name, _user_id: null }, // (line one) 
                    { $set: { _user_id: this.reviewerData._user_id, name: this.reviewerData.name } }, // (line two)
                    { upsert: true } // (line three)
                )
                //line one: if (conditions)
                //line two: then
                //line three: start
                //{ upsert: true } => means => if the compiler or the mongoDB findes a reviewer according to the conditions (line one), make an update according to line two.
                // بالعربي
                // بالشروط هاي reviewer لو لقيت 
                // { name: this.reviewerData.name, _user_id: null } => _user_id=null المقصد من هذا السطر انو لو ال
                // اعمل التعديل التالي
                // { $set: { _user_id: this.reviewerData._user_id, name: this.reviewerData._user_id } }
                cb({
                    status: true
                })
            } catch (error) {
                cb({
                    status: false,
                    message: 'error.message'
                })
            }
        })
    }
}

module.exports = Reviewer;