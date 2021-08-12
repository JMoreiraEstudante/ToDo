'use strict';
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const TodoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

// create and export model
module.exports = mongoose.model("model", TodoSchema);