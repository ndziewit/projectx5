const router = require("express").Router();
const logIn = require("../models/logIn");

router.route("/api/Usercheck").post(async (req, res) => {
    const suppliedPassword = req.body.password;
    const email = req.body.email;
    const foundUser = await logIn.findOne({ email });

    if (foundUser !== null) {
        const actualPassword = foundUser.password;
        if (suppliedPassword === actualPassword) {
            return res.status(200).send();
        } else {
            return res.status(401).send();
        }
    }
    return res.status(401).send();
});

router.route("/api/User").get((req, res) => {
    logIn
        .find()
        .then(login => res.json(login))
        .catch(err => res.status(400).json("error: " + err));
});

router.route("/api/addUser").post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new logIn({
        email,
        password
    });

    newUser
    .save()
    .then(() => res.json("New user created"))
    .catch(err => res.status(400).json("error: " + err));
});

router.route("/api/User/:id").get((req, res) => {
    logIn
    .findById(req.params.id)
    .then(logIn => res.json(login))
    .catch(err => res.status(400).json("error: " + err));
});

router.route("/api/delete/User/:id").delete((req, res) => {
    logIn
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted"))
    .catch(err => res.status(400).json("error: " + err));
});

router.route("/api/update/User/:id").post((req, res) => {
    logIn.findById(req.params.id).then(login => {
        login.email = req.body.email;
        login.password = req.body.password;

        login
        .save()
        .then(() => res.json("Updated"))
        .catch(err => escape.status(400).json("error: " + err));
    });
});
module.exports = router;
