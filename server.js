//======
var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var session = require("express-session");
var db = require("./models/index.js");
//========
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ==========For Passport=============
//load passport strategies
require('./config/passport/passport.js')(passport, db.user);
// session secret
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
// persistent login sessions
app.use(passport.session());
//===============================
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//==============================================
// Import routes and give the server access to them.
var routes = require("./controllers/html_controller.js");
var authRoute = require('./routes/auth.js')(app,passport);

app.use(routes);
//==============================================
//Listen with no sync
// app.listen(PORT, function() {
//   console.log("App now listening at localhost:" + PORT);
// });

//Syncing our sequelize models and then starting our Express app
//=============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
