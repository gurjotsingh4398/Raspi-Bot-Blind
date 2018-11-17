const express = require("express");
const router = express.Router();
const creation = require("../ds/saving");
const reset = require("../ds/reset");
const identify = require("../ds/contruct");

let path = require("../config/socket").path;

let pre = -1;
let now;
let temp_path;

let object = "";
let find = "";

router.get("/", (req, res) => {
  now = path.length;

  if (object !== "") {
    if (pre != -1) {
      temp_path = JSON.parse(JSON.stringify(path));
      temp_path.splice(0, pre);
    } else {
      temp_path = JSON.parse(JSON.stringify(path));
    }

    creation(object, temp_path);
    pre = now;
    object = "";
  }
  res.render("index");
});

router.get("/name", (req, res) => {
  now = path.length;

  if (object !== "") {
    if (pre != -1) {
      temp_path = JSON.parse(JSON.stringify(path));
      temp_path.splice(0, pre);
    } else {
      temp_path = JSON.parse(JSON.stringify(path));
    }

    creation(object, temp_path);
    pre = now;
    object = "";
  }
  res.render("name");
});

router.get("/dashboard", (req, res) => {
  if (req.query.object.length > 0 && req.query.object !== "") {
    object = req.query.object;
  }
  res.render("dash");
});

router.get("/search", (req, res) => {
  if (req.query.speech.length > 0 && req.query.speech !== "") {
    find = req.query.speech;
    identify(find);
  }
  res.redirect("/");
});

router.get("/reset", (req, res) => {
  reset();
  res.redirect("/");
});

module.exports = {
  router,
  find
};
