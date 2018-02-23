const db = require("../models");

// Defining methods for the userController
module.exports = {
  uploadMeme: function (req, res) {
    const userId = req.session.user._id;
    db.Meme.create(req.body)
      .then(function (Meme) {
        db.User.findOneAndUpdate({ _id: userId }, { $push: { memes: Meme._id } })
          .then(
          res.json("Meme uploaded successfully!")
          );

      }).catch(
      err => res.json("there was an error with upload")
      );
  },
  getFriends: function (req, res) {
    const userId = req.session.user._id;
    db.User.find({ // find user
      _id: userId
    }).then(function (result) {
      var friends = result.friends;
      db.User.findAll({
        _id: { $in: friends }
      }).then(function (result) { // find friends
        res.json(result);
      });
    });
  },
  getFeed: function (req, res) {
    const userId = req.session.user._id;
    db.FeedMessage.find({
      sender: userId
    }).then(function (result) {
      res.json(result);
    });
  },
  getMemes: function (req, res) {
    const userId = req.session.user._id;
    db.User.find({ // find user
      _id: userId
    }).then(function (result) {
      var memes = result.memes;
      db.Meme.find({
        _id: { $in: memes }
      }).then(function (result) { // find memes
        res.json(result);
      });
    });
  },
  getMemesByUser: function (req, res) {
    const userId = req.body.userId;
    console.log("___________________");
    console.log(userId);
    db.User.find({ // find user
      _id: userId
    })
    .populate('memes')
    .then(function (result) {
      console.log(result);
      var memes = result[0].memes;
      db.Meme.find({
        _id: { $in: memes }
      }).then(function (result) { // find memes
        console.log(result);
        res.json(result);
      });
    });
  },
  getSession: function (req, res) {
      res.json(req.session.user);
  }
};



// var express = require("express");
// var router = express.Router();
// var mongoose = require("mongoose");
// var db = require("../models");




// router.post("/api/user/getFriends", async function (req, res) {
//   const userId = req.session.user._id;
//   db.User.find({ // find user
//     _id: userId
//   }).then(function (result) {
//     var friends = result.friends;
//     db.User.findAll({
//       _id: { $in: friends }
//     }).then(function (result) { // find friends
//       res.json(result);
//     });
//   });
// });

// router.post("/api/user/getFeed", async function (req, res) {
//   const userId = req.session.user._id;
//   db.FeedMessage.find({
//     sender: userId
//   }).then(function (result) {
//     res.json(result);
//   });
// });


// router.post("/api/user/getMemes", async function (req, res) {
//   const userId = req.session.user._id;
//   db.User.find({ // find user
//     _id: userId
//   }).then(function (result) {
//     var memes = result.memes;
//     db.Meme.findAll({
//       _id: { $in: memes }
//     }).then(function (result) { // find memes
//       res.json(result);
//     });
//   });
// });

// router.post("/api/user/getMemesByUser", async function (req, res) {
//   const userId = req.body.userId;
//   db.User.find({ // find user
//     _id: userId
//   }).then(function (result) {
//     var memes = result.memes;
//     db.Meme.findAll({
//       _id: { $in: memes }
//     }).then(function (result) { // find memes
//       res.json(result);
//     });
//   });
// });


// router.post("/api/user/uploadMeme", async function (req, res) {

// });

router.get("/api/user/session", function(req, res) {
  res.json(req.session.user);
});

module.exports = router;
