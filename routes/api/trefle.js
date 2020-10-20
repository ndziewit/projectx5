const { error } = require("console");
const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/species/:query", (req, res) => {
  axios
    .get(
      `https://trefle.io/api/v1/species/search?token=${process.env.TREFLE_TOKEN}&q=${req.params.query}&limit=5`
    )
    .then((data) => {
      return res.json(data.data.data);
    })
    .catch((error) => {
      return res.send(error);
    });
});

// Second API call for the soil humidity
// router.get("/species/:plantid", (req, res) => {
//   axios
//     .get(
//       `https://trefle.io/api/v1/species/{id}?token=${process.env.TREFLE_TOKEN}&q=${req.params.query}&limit=5`
//     )
//     .then((data) => {
//       return res.json(data.data.data);
//     })
//     .catch((error) => {
//       return res.send(error);
//     });
// });


module.exports = router;
