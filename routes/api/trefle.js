const { error } = require("console");
const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/species/:query", (req, res) => {
  axios
    .get(
      `https://trefle.io/api/v1/species/search?token=syQu-8eQR9xO_OAIUQXcwDTWfIHYqt31-3Ld6UkZC0M&q=${req.params.query}&limit=5`
    )
    .then((data) => {
      return res.json(data.data.data);
    })
    .catch((error) => {
      return res.send(error);
    });
});

module.exports = router;
