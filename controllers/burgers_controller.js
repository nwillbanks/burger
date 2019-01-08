var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {

  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/insertOne", function (req, res) {
  burger.insertOne([
    "burger_name"
  ], [
      req.body.burger_name
    ], function (data) {
      res.redirect('/');
    });
});

router.put("/burgers/updateOne/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function (data) {
    res.redirect('/');
  });
});

router.delete("/burgers/deleteAll/", function (req, res) {
  burger.deleteAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.redirect('/');
  });
});

module.exports = router;