const mongoose = require("mongoose");
const Image = require("./image");
const {
    URL, DEFAULT_NUMBER_SCHEMA_REQUIRED,
    DEFAULT_STRING_SCHEMA_REQUIRED, DEFAULT_STRING_SCHEMA
} = require("./helpers/mongooseValidation");

const itemSchema = new mongoose.Schema({
    title: DEFAULT_STRING_SCHEMA_REQUIRED,
    description: { ...DEFAULT_STRING_SCHEMA_REQUIRED, maxLength: 1024 },
    image: Image,
    price:
        DEFAULT_NUMBER_SCHEMA_REQUIRED
    ,
    course: DEFAULT_STRING_SCHEMA,
    dietary: DEFAULT_STRING_SCHEMA,
    ingredients: [String],
    likes: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

const Item = mongoose.model("items", itemSchema);

module.exports = Item;
