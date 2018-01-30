module.exports = function(sequelize, DataTypes) {
    var Feed = sequelize.define("Feed", {
      guild: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        },
        defaultValue: "Test"
      },
      channel: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        },
        defaultValue: "Test"
      },
      username: {
        type: DataTypes.STRING,
        allowNull:true
      },
      message: {
        type: DataTypes.STRING,
        defaultValue: "Test"
        
      }
    });
    return Feed;
  };
  