const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/User")

const GardenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    scientific_name: {
        type: String,
        required: true
    }
});
const Garden = mongoose.model("garden", GardenSchema);
module.exports = User;