const tokenService = require("../utils/token/tokenService");
const chalk = require("chalk");

const CustomError = require("../utils/CustomError");

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers["x-auth-token"]) {
            console.log("here in 9");
            throw new CustomError("please provide token");
            console.log(chalk.redBright("User didn't provide token!"));
        }
        const userData = await tokenService.verifyToken(req.headers["x-auth-token"]);
        if (!userData) {
            console.log("here in 15");

            console.log(chalk.redBright("Invalid Token!"));
            return res.status(401).json({ msg: "Invalid  Token!" });
        }
        req.userData = userData;
        next();
    } catch (error) {
        console.log("here in 23");

        let errToSend;
        if (error instanceof CustomError) {
            console.log("here in 27");

            errToSend = error;
        } else {
            console.log("here in 31");

            errToSend = new CustomError("Invalid token")
        }
        res.status(401).json(errToSend)
        console.log(chalk.redBright(errToSend))
    }
}

module.exports = authMiddleware;