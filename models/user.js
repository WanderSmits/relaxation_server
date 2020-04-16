"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {}
  );
  user.associate = function (models) {
    user.hasOne(models.profile);
    user.belongsToMany(models.sessions, {
      through: "userSessions",
      as: "sessions",
      foreignKey: "sessionId",
    });
  };
  return user;
};
