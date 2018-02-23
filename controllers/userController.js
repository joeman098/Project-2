var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var db = require("../models");

router.post("api/user/getFriends", async function(req, res) {
  const userId = req.session.user._id;
  db.User.find({
    // find user
    _id: userId
  }).then(function(result) {
    var friends = result.friends;
    db.User.findAll({
      _id: { $in: friends }
    }).then(function(result) {
      // find friends
      res.json(result);
    });
  });
});

router.post("api/user/getFeed", async function(req, res) {
  const userId = req.session.user._id;
  db.FeedMessage.find({
    sender: userId
  }).then(function(result) {
    res.json(result);
  });
});

router.post("api/user/getMemes", async function(req, res) {
  const userId = req.session.user._id;
  db.User.find({
    // find user
    _id: userId
  }).then(function(result) {
    var memes = result.memes;
    db.Meme.findAll({
      _id: { $in: memes }
    }).then(function(result) {
      // find memes
      res.json(result);
    });
  });
});

router.get("/api/user/session", function(req, res) {
  res.json(req.session.user);
});

module.exports = router;
