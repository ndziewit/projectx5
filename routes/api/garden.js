const express = require("express");
const router = express.Router();

app.post('/garden', (req, res) => {
    console.log(req.body);
    db.Wooter('plantAdded').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
    })
});