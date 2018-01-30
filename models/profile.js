var db = require("./index.js");
var User = db.User;

module.exports = function(sequelize, Sequelize) {
 
    var Profile = sequelize.define('profile', {
 
        friendsList: {
            type: Sequelize.TEXT
        },
 
        interests: {
            type: Sequelize.TEXT
        },
 
 
 
    });
   
    return Profile;
   
}
