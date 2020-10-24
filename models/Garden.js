const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const User = require("../models/User")

const gardenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    scientific_name: {
        type: String,
        required: true
    }
});
const Garden = mongoose.model("garden", gardenSchema);
module.exports = Garden;