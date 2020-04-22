"use strict";
module.exports = (sequelize, DataTypes) => {
  const userSessions = sequelize.define(
    "userSessions",
    {
      userId: DataTypes.INTEGER,
      sessionId: DataTypes.INTEGER,
    },
    {}
  );
  userSessions.associate = function (models) {
    userSessions.belongsTo(models.sessions);
    userSessions.belongsTo(models.user);
  };
  return userSessions;
};
