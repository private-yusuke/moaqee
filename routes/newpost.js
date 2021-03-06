var express = require('express');
var debug = require("debug")("moaqee:server");
var db = require("../db");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("newpost");
});
router.post("/", function(req, res, next) {
  if(!req.body.title || !req.body.content) {
    next(new Error("At least 1 argument is empty"));
    return;
  }
  db.insert({title: req.body.title, content: req.body.content}, (err, newDoc) => {
      if(err) next(err);
      debug("Registered: " + req.body.title);
      res.render("newpost_done", {doc: newDoc});
  });
})

module.exports = router;
