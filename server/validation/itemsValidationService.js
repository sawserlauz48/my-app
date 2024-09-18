const joiItemsValidation = require("./joi/itemValidation");
const config = require("config");

const validatorOption = config.get("validatorOption");


const createItemValidation = (userInput) => {
    if (validatorOption === "Joi") {
        return joiItemsValidation.validateItemSchema(userInput);
    }
    throw new Error("validator undefined");
};
const createItemIdValidation = (userInput) => {
    if (validatorOption === "Joi") {
        return joiItemsValidation.validateIdSchema(userInput);
    }
    throw new Error("validator undefined");
};

module.exports = { createItemValidation, createItemIdValidation };