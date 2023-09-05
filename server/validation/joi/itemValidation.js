const Joi = require("joi");

const createItemSchema = Joi.object({
    title: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    price: Joi.number().min(0).required(),
    dietary: Joi.string().min(2).max(256).required(),
    course: Joi.string().min(2).max(500).required(),
    ingredients: Joi.array().required(),
    image: Joi.object().keys({
        url: Joi.string().regex(
            new RegExp(
                /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
            )
        ).allow(""),
        alt: Joi.string().min(2).max(256).allow(""),
    }),
});

const validateItemSchema = (userInput) => {
    return createItemSchema.validateAsync(userInput);
};


const idSchema = Joi.string().hex().required();

const validateIdSchema = (userInput) => { return idSchema.validateAsync(userInput); }

module.exports = {
    validateItemSchema, validateIdSchema
};
