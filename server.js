const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();

const users = require("./routes/api/users");
const trefleApi = require("./routes/api/trefle");
const { env } = require("process");

const app = express();

//Bodyparser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//Config DB
const db = require("./config/keys").mongoURI;

//MongoDB  Connection
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/Wooter",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//Passport Middleware
app.use(passport.initialize());

//Config Passport
require("./config/passport")(passport);

//Routes
app.use("/api/", trefleApi);
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} !`));
