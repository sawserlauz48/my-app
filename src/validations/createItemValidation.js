import Joi from "joi";

import validation from "./validation";

const creatItemSchema = Joi.object({
    title: Joi.string().min(2).max(100).label("Title").required(),
    description: Joi.string().min(2).max(255).label("Description").required(),
    price: Joi.number().min(1).max(99999).label("Price").required(""),
    imageUrl: Joi.string().min(2).max(500).label("Image Url").allow(""),
    imageAlt: Joi.string().min(2).max(100).label("Image Alt").allow(""),
    dietary: Joi.string().min(2).max(500).label("Dietary").required(""),
    course: Joi.string().min(2).max(500).label("Course").required(""),
    ingredients: Joi.array().items(Joi.string().allow("")).label("Ingredients").allow("")
        .messages({
            "any.required": "Ingredients can't be empty",
            "number.base": "Ingredients can't be empty"
        })
    ,
});

const validateCreatItemSchema = (userInput) =>
    validation(creatItemSchema, userInput);

export default validateCreatItemSchema;