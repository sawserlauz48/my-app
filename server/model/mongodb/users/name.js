const mongoose = require("mongoose");
const {
    DEFAULT_STRING_SCHEMA_REQUIRED, DEFAULT_STRING_SCHEMA, } = require("../items/helpers/mongooseValidation")

const Name = new mongoose.Schema({
    firstName: DEFAULT_STRING_SCHEMA_REQUIRED,
    lastName: DEFAULT_STRING_SCHEMA_REQUIRED,
});

module.exports = Name