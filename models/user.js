var db = require("./index.js");

module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        displayName: {
            type: Sequelize.TEXT
        },
 
        about: {
            type: Sequelize.TEXT
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        resetPasswordToken:{
            type: Sequelize.STRING,
        } ,
        resetPasswordExpires: {
            type: Sequelize.DATE
        },
        image:{
            type: Sequelize.STRING,
            validate: {
                isUrl: true
            }
        },
 
        friendsList: {
            type: Sequelize.TEXT
        },
 
        interests: {
            type: Sequelize.TEXT
        }
 
 
    });

      

    return User;
 
}