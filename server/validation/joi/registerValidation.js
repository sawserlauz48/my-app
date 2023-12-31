const Joi = require("joi");

const registerSchema = Joi.object({
    name: Joi.object().keys({
        firstName: Joi.string().min(2).max(256).required(),
        lastName: Joi.string().min(2).max(256).required(),
    }).required(),
    phone: Joi.string()
        .regex(new RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/))
        .required(),
    email: Joi.string().regex(new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)).required(),
    password: Joi.string().regex(new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})/)).min(6).max(16).required(),
    image: Joi.object({
        data: Joi.string().allow(""),
        contentType: Joi.string().valid('image/jpeg', 'image/jpg', 'image/png', 'image/gif'),
        alt: Joi.string().min(2).max(256).allow(""),
    }
    ),
    address: Joi.object().keys({
        country: Joi.string().min(2).max(256).required(),
        city: Joi.string().min(2).max(256).required(),
        street: Joi.string().min(2).max(256).allow(""),
        houseNumber: Joi.number().min(1).allow(""),
    }).required(),
    isEmployed: Joi.bool().allow(""),
    isAdmin: Joi.bool().allow(""),
});

const idSchema = Joi.string().hex().required();


const validateIdSchema = (userInput) => { return idSchema.validateAsync(userInput); }


const validateRegisterSchema = (userInput) => { return registerSchema.validateAsync(userInput); }

module.exports = { validateRegisterSchema, validateIdSchema }
