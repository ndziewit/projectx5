const { error } = require("console");
const express = require("express");
const router = express.Router();

router.get("/trefle/species/:query",(req,res) => {
    axios.get(`https://trefle.io/api/v1/species/search?token=${process.env.TREFLE_TOKEN}&q=${req.params.query}&limit=5`)
        .then(data => {
            console.log(data);
            return res.json(data)
        }).catch(error => {
            return res.send(error)
        }) 
})