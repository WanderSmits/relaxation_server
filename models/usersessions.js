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
    // associations can be defined here
  };
  return userSessions;
};
