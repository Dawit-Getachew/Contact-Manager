const e = require("express");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500
    switch (statusCode){
        case 400:
            res.json({title: "Validation Failed",message: err.message, statusCode: statusCode, stackTrace: err.stack});
            break;
        case 404:
            res.json({title: "Not Found",message: err.message, statusCode: statusCode, stackTrace: err.stack});
            break;
        default:
            break;
    }
};

module.exports = errorHandler;