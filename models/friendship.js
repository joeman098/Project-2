module.exports = function(sequelize, Sequelize) {
  var Friendship = sequelize.define(
    "Friendship",

    {
        User1:{
            type: Sequelize.STRING,
        },
        User2:{
            type: Sequelize.STRING,
        },

      accepted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }

    },
    
  );

  Friendship.associate = function (models) {
    Friendship.belongsToMany(models.user, {as:"groups",through: "friendship", foreignKey:"FID" })
}
  return Friendship;
};
