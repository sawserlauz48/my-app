import Joi from "joi";

import validation from "./validation";

const registerSchema = Joi.object({
    firstName: Joi.string().min(2).max(100).label("First name").required(),
    lastName: Joi.string().min(2).max(100).label("Last name").required(),
    phone: Joi.string().min(9).max(100).label("Phone").required(),
    country: Joi.string().min(2).max(100).label("Country").required(),
    city: Joi.string().min(2).max(100).label("City").required(),
    houseNumber: Joi.number().min(1).max(100).label("House number").required(),
    street: Joi.string().min(2).max(100).label("Street").required(),
    imageUrl: Joi.string().min(6).max(100).label("Image Url").allow(""),
    imageAlt: Joi.string().min(6).max(100).label("Image Alt").allow(""),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .label("E-mail")
        .required(),
    password: Joi.string()
        .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z]).{0,}$"))
        .message({
            "string.pattern.base": `"a minimum of 1 lower and upper case letter and one special character of !@#$%^&*-().`,
        })
        .min(6)
        .max(14)
        .label("Password")
        .required(),
    passwordConfirm: Joi.string()
        .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z]).{0,}$"))
        .min(6)
        .max(14)
        .label("Password")
        .required(),
});

const validateRegisterSchema = (userInput) =>
    validation(registerSchema, userInput);

export default validateRegisterSchema;