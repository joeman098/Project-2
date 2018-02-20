//load bcrypt
var bCrypt = require("bcrypt-nodejs");
var twitchStrategy = require("passport-twitch").Strategy;
var db = require("../../models");

module.exports = function (passport) {
  var User = db.User;
  // var LocalStrategy = require("passport-local").Strategy;

  // passport.use(
  //   "local-signup",
  //   new LocalStrategy(
  //     {
  //       usernameField: "email",

  //       passwordField: "password",

  //       passReqToCallback: true // allows us to pass back the entire request to the callback
  //     },

  //     function(req, email, password, done) {
  //       var generateHash = function(password) {
  //         return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
  //       };

  //       User.findOne({
  //         where: {
  //           email: email
  //         }
  //       }).then(function(user) {
  //         if (user) {
  //           return done(null, false, {
  //             message: "That email is already taken"
  //           });
  //         } else {
  //           var userPassword = generateHash(password);

  //           var data = {
  //             email: email,

  //             password: userPassword,

  //             displayName: req.body.displayName,

  //             image: req.body.ProfileImage,

  //             interests: req.body.interests
  //           };

  //           User.create(data).then(function(newUser, created) {
  //             if (!newUser) {
  //               return done(null, false);
  //             }

  //             if (newUser) {
  //               return done(null, newUser);
  //             }
  //           });
  //         }
  //       });
  //     }
  //   )
  // );
  //serialize
  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  // deserialize user
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  //LOCAL SIGNIN
  // passport.use(
  //   "local-signin",
  //   new LocalStrategy(
  //     {
  //       // by default, local strategy uses username and password, we will override with email

  //       usernameField: "email",

  //       passwordField: "password",

  //       passReqToCallback: true // allows us to pass back the entire request to the callback
  //     },

  //     function(req, email, password, done) {
  //       var User = user;

  //       var isValidPassword = function(userpass, password) {
  //         return bCrypt.compareSync(password, userpass);
  //       };

  //       User.findOne({
  //         where: {
  //           email: email
  //         }
  //       })
  //         .then(function(user) {
  //           if (!user) {
  //             req.flash("error", "No account with that email address exists.");
  //             return done(null, false, {});
  //           }

  //           if (!isValidPassword(user.password, password)) {
  //             req.flash("error", "Incorrect password.");
  //             return done(null, false, {});
  //           }

  //           var userinfo = user.get();
  //           return done(null, userinfo);
  //         })
  //         .catch(function(err) {
  //           console.log("Error:", err);
  //           req.flash("error", "Something went wrong with your Signin");
  //           return done(null, false, {});
  //         });
  //     }
  //   )
  // );
  passport.use(
    new twitchStrategy(
      {
        clientID: process.env.TWITCH_CLIENT_ID,
        clientSecret: process.env.TWITCH_CLIENT_SECRET,
        callbackURL: process.env.TWITCH_CALLBACK_URL,
        scope: process.env.TWITCH_SCOPE
      },
      function (accessToken, refreshToken, profile, done) {
        User.find({ twitchId: profile.id }, function (err, result) {
          if (result.length === 0) {
            User.create({
              TwitchId: profile.id,
              username: profile.username,
              email: profile.email
            }, function (err, result) {
              return done(err, result);
            });
          } else {
            return done(err, result);
          }
        });
      }
    )
  );
};
