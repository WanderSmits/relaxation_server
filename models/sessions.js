"use strict";
module.exports = (sequelize, DataTypes) => {
  const sessions = sequelize.define(
    "sessions",
    {
      date: DataTypes.DATEONLY,
    },
    {}
  );
  sessions.associate = function (models) {
    sessions.belongsToMany(models.sessions, {
      through: "userSessions",
      as: "users",
      foreignKey: "userId",
    });
  };
  return sessions;
};
