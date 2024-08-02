const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode: 500;
    res.json({message:err.message, stackTrace: err.stack});
    res.status(statusCode);

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
            break;

        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
            break;

        case constants.FORBIDDEN:
            res.json({ title: "Forbidden Error", message: err.message, stackTrace: err.stack });
            break;

        case constants.UNAUTHORIZE:
            res.json({ title: "Unauthorized Error", message: err.message, stackTrace: err.stack });
            break;

        case constants.SERVER_ERROR:
            res.json({ title: "Server Error", message: err.message, stackTrace: err.stack });
            break;

        default:
            res.json({ title: "Error", message: err.message, stackTrace: err.stack });
            break;
    }
};

module.exports = errorHandler;
