module.exports = function(sequelize, DataTypes) {
    var Feed = sequelize.define("Feed", {
      guild: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      channel: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      username: {
        type: DataTypes.STRING,
        defaultValue: "Test"
      },
      message: {
        type: DataTypes.STRING,
        defaultValue: "Test"
        
      }
    });
    return Feed;
  };
  