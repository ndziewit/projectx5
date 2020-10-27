const express = require("express");
const router = express.Router();
const { error } = require("console");
const axios = require("axios");
const nodemailer = require('nodemailer');
const creds = require('./config/email');
const User = require("../../models/User")


var transport = {
    host: 'smtp.gmail.com', // e.g. smtp.gmail.com
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  }
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('All works fine, congratz!');
    }
  });
  
  app.use(express.json()); app.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.messageHtml
  
  
    var mail = {
      from: name,
      to: User.email,  
      subject: 'Contact form request',
  
      html: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })

module.exports = router;