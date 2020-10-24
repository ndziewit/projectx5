const express = require("express");
const router = express.Router();
const { error } = require("console");
const axios = require("axios");
const Garden = require("../../models/Garden");
const User = require("../../models/User");
// const mongoose = require("mongoose");

// router.get("/", (req, res) => {
//     axios
//       .get(
//         `mongodb://localhost/Wooter/users`
//       )
//       .then((data) => {
//         return res.json(data.data.data);
//       })
//       .catch((error) => {
//         return res.send(error);
//       });
//   });
router.get("/", (req, res) => {
  Garden.find()
    .then((dbWooter) => {
      res.json(dbWooter);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Garden.create(req.body)
    .then((dbWooter) => {
      console.log(dbWooter);
      // User.findById(req.body.user, (err,user) => {
      //   if (err) throw err;
      //   console.log(user);
      // } )
      User.findByIdAndUpdate(
         req.body.user,
        {
          $push: { garden: dbWooter },
        }, {new: true}
      ).then((user)=> {console.log(user)})
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.post("/", (req, res) => {
//     axios
//       .post(
//         `mongodb://localhost/Wooter/garden`
//       )
//       .then((data) => {
//         return res.json(data.data.data);
//       })
//       .catch((error) => {
//         return res.send(error);
//       });
//   });

module.exports = router;
