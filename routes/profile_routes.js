var authController = require("../controllers/auth_controller.js");
module.exports = function(app, userDB){

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
    
}