const joiRegisterValidation = require("./joi/registerValidation");
const joiUpdateValidation = require("./joi/updateProfileValidation");
const joiLoginValidation = require("./joi/loginValidation");
const config = require("config");


const validatorOption = config.get("validatorOption");

const registerUserValidation = (userInput) => {
    if (validatorOption === "Joi") {
        return joiRegisterValidation.validateRegisterSchema(userInput);
    }
    throw new Error("validator undefined");
};
const updateUserValidation = (userInput) => {
    if (validatorOption === "Joi") {
        return joiUpdateValidation.validateProfileSchema(userInput);
    }
    throw new Error("validator undefined");
};
const createUserIdValidation = (userInput) => {
    if (validatorOption === "Joi") {
        return joiRegisterValidation.validateIdSchema(userInput);
    }
    throw new Error("validator undefined");
};
const LoginUserValidation = (userInput) => {
    if (validatorOption === "Joi") {
        return joiLoginValidation.validateLoginSchema(userInput);
    }
    throw new Error("validator undefined");
};


module.exports = { registerUserValidation, createUserIdValidation, LoginUserValidation, updateUserValidation };