const CustomError = require("../utils/CustomError");
const itemService = require("../model/itemsService/itemsService");
const itemsValidationService = require("../validation/itemsValidationService");
const chalk = require("chalk");


const permissionsMiddleware = (isEmployed, isUser) => {
    return (req, res, next) => {
        if (!req.userData) {
            console.log(chalk.redBright("userData was not provided"));
            throw new CustomError("Must provide userData");
        }
        if (isEmployed === req.userData.isEmployed && isEmployed === true) {
            return next()
        }

        if (isUser === req.userData.isUser && isUser === true) {
            return next()
        }
        console.log(chalk.redBright("The user is not allowed to edit the item"));
        res.status(401).json({ msg: "You are not allowed to edit/create this item" });
    };


}

module.exports = permissionsMiddleware;
