const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const users = require("./routes/api/users");
const garden = require("./routes/api/garden");
const trefleApi = require("./routes/api/trefle");
const { env } = require("process");

const app = express();

const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com", 
    port: 465,
    secure: true,
  auth: {
    user: "WooderApptest@yahoo.com",
    pass: "gbscogzcuprsnmyz"
  }
});

const { compareSync } = require("bcryptjs");

//Bodyparse
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
app.use("/api/trefle", trefleApi);
app.use("/api/users", users);
app.use("/api/garden", garden);

app.post('/api/email', (req, res, next) => {
  res.json("status")
  var content = req.body.plant
  console.log(req.body.plant)
  
  var mail = {
    from: "WooderApptest@yahoo.com", 
    to: "wooderapp@gmail.com", 
    subject: "It's Time to Water a Plant!",
    // message: "Time to Water!",
    text: "Your Fiddle-leaf philodendron needs watering!"
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


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} !`));
