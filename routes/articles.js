var express = require('express');
var db = require("../db");
var router = express.Router();

/* GET users listing. */
router.get('/:_id', function(req, res, next) {
  db.findOne({_id: req.params._id}, (err, doc) => {
      if(err) next(err);
      if(!doc) next(new Error("Article not found"));
      res.render("article", {doc: doc});
  })
});

module.exports = router;
