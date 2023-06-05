const getProfile = (req, res, next) => {
    const studentId = req.query.id;

    // query db 
    //get data
    res.status(200).json({
        id: studentId,
        name: "Ahmed",
        collage: 'IT'
    })
};

const getGrades = (req, res, next) => {
    //get data
    res.status(200).json([
        { name: 'web', grade: 80 },
        { name: 'node', grade: 40 }
    ])
};

const getTimeTable = (req, res, next) => {
    //get data
    res.status(200).json({
        data: [
            { sourse_id: 1, time: "sat mon" },
            { sourse_id: 11, time: "sat mon" }
        ]
    });
};


module.exports = {
    getGrades, getProfile, getTimeTable
}