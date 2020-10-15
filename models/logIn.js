const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logInForm = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true }
    },
);

const Userlogin = mongoose.model("Userlogin", logInForm);

module.exports = Userlogin;