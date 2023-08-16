const mongoose = require("mongoose");
const { DEFAULT_NUMBER_SCHEMA_REQUIRED, URL, } = require("../items/helpers/mongooseValidation")

const Item = new mongoose.Schema({
    item_id: { type: mongoose.Schema.Types.ObjectId },
    ingredients: { type: Object },
    specialInstruction: {
        type: String,
        maxLength: 256,
        trim: true,
    },
    title: {
        type: String,
        maxLength: 256,
        trim: true,
    },
    image: URL,
    price: DEFAULT_NUMBER_SCHEMA_REQUIRED
});

module.exports = Item