const mongoose = require("mongoose");
const { DEFAULT_STRING_SCHEMA,
    DEFAULT_STRING_SCHEMA_REQUIRED, } = require("../items/helpers/mongooseValidation")

const Address = new mongoose.Schema({
    country: DEFAULT_STRING_SCHEMA_REQUIRED,
    city: DEFAULT_STRING_SCHEMA_REQUIRED,
    street: DEFAULT_STRING_SCHEMA,
    houseNumber: {
        type: Number,
        trim: true,
        minLength: 1,
    },
});

module.exports = Address