const route = require("express").Router();

const User = require("../model/user");

route.all("/", (req, res) => {
  return res.send("User Controller...");
});

route.post("/adduser", (req, res) => {
  const temp = new User({
    name: req.body.name,
    mobileno: req.body.mobileno,
    password: req.body.password,
  });
  temp.save((err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(result);
  });
});

module.exports = route;
