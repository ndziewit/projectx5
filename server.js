const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();

const users = require("./routes/api/users");
const garden = require("./routes/api/garden");
const trefleApi = require("./routes/api/trefle");
const { env } = require("process");

const app = express();

let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com", 
    port: 465,
    secure: true,
  auth: {
    user: "WooderApp@yahoo.com",
    pass: "rqlkbgmdysxgzvnh"
  }
});

const { compareSync } = require("bcryptjs");

//Bodyparser
app.use(
  bodyParser.urlencoded({
    extended: true
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

// verifying the connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
})
  
//Routes
app.use("/api/trefle", trefleApi);
app.use("/api/users", users);
app.use("/api/garden", garden);

app.post('/api/email', (req, res, next) => {
  res.json("status")
  var content = req.body.plant

  var mail = {
    from: "WooderApp@yahoo.com", 
    to: "cory.manthou@gmail.com", 
    subject: "It's Time to Water a Plant!",
    // message: "Time to Water!",
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} !`));
