const getOperationA = (req, res, next) => {
    const nameOfPage = "name of page" + req.query;
    const data = req.headers;

    //handling error - try catch
    try {
        res.status(200).json({
            nameOfPage: nameOfPage,
            data: data
        })
    } catch (err) {
        const error = createHttpError(400, 'you need to insert name of page')
        next(error);
    }

}

const getOperationB = (req, res, next) => {
    const nameOfPage = "name of page" + req.query;
    const hostName = "HostName" + req.headers.host;

    //handling error - try catch
    try {
        res.status(200).json({
            nameOfPage: nameOfPage,
            HostName: hostName
        })
    } catch (err) {
        const error = createHttpError(400, 'you need to insert name of page')
        next(error);
    }

}

const getOperationC = (req, res, next) => {

    res.status(200).json({
        Description: "This operation for optimization ...."
    })

}

module.exports = {
    getOperationA, getOperationB, getOperationC
}

// module.exports = getOperationA, getOperationB, getOperationC => مش حقدر اصلهم