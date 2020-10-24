const express = require("express");
const router = express.Router();
const { error } = require("console");
const axios = require("axios");
const Garden = require("../../models/Garden");
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
      .then(dbWooter => {
        res.json(dbWooter);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.post("/", (req, res) => {
Garden.create({})
    .then(dbWooter => {
    res.json(dbWooter);
    })
    .catch(err => {
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