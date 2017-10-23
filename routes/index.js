var express = require('express');
var db = require("../db");
var settings = require("../settings");
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  var params = {settings: settings};
  new Promise((resolve, reject) => {
    var article_count = settings.blog.articlesPerPage;
    db.find({}).sort({createdAt: -1}).limit(article_count).exec((err, docs) => {
      if(err) next(err);
      params.docs = docs;
      params.firstArticle = 1;
      params.lastArticle = article_count;
      params.page = 1;
      resolve();
      //res.render("index", {docs: docs, settings: settings});
    });
  }).then(() => {
    db.count({}, (err, count) => {
      if(err) next(err);
      params.count = count;
      res.render("index", params);
    });
  });
});*/
router.get("/", function(req, res, next) {
  res.redirect(301, "/page/1");
});
router.get("/page", function(req, res, next) {
  res.redirect(301, "/page/1");
})

router.get("/page/:page", function(req, res, next) {
  var page = 1;
  if(req.params.page) page = req.params.page;
  if(isNaN(page)) res.redirect(406, "/page/1");
  if(page < 1) res.redirect(406, "/page/1");

  var params = {settings: settings};
  new Promise((resolve, reject) => {
    var article_count = settings.blog.articlesPerPage;
    db.find({}).sort({createdAt: -1}).skip((page-1)*article_count).limit(article_count).exec((err, docs) => {
      if(err) next(err);
      params.docs = docs;
      params.firstArticle = 1+(page-1)*article_count;
      params.lastArticle = page*article_count;
      params.page = parseInt(page);
      resolve();
      //res.render("index", {docs: docs, settings: settings});
    });
  }).then(() => {
    db.count({}, (err, count) => {
      if(err) next(err);
      params.count = count;
      res.render("index", params);
    });
  });
});

module.exports = router;
