
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
    
}