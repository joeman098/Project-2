

var authController = require("../controllers/auth_controller.js");
module.exports = function(app, db){
var userDB = db.user
var friendDB = db.Friendship
    app.post("/dashboard/edit", function(req, res) {
        id = req.user.id
        var data = {
          about: req.body.about,
          interests: req.body.interests
        }
        userDB.update(
          data,
          {
            where: {
              id: id
            }
          }).then(function(userdb) {
            res.redirect('/dashboard');
          });
      });
    app.get("/profile/:id",function (req, res) {
        var id = req.params.id ;
    
        userDB.findOne({where:{ id:id}}
        ).then(function (data) {
            res.render("profile",{displayName: data.displayName , profileImage:data.image , aboutuser: data.about} )
        })
    })
  app.post("/sendFriend", function (req, res) {
    var reqid = 1
    var fid = 2
    var test ={
      User1 : 1,
      User2 :2
    }
    friendDB.findOne({where: {User1 : reqid , User2: fid}}).then(function (data) {
      if(data){
        return "already your friend";
      }
      else{
        friendDB.create(test).then(function (data) {
          res.redirect("/dashboard")
        })
      }
      
    });
   
  });

}