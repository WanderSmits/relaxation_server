"use strict";
module.exports = (sequelize, DataTypes) => {
  const sessions = sequelize.define(
    "sessions",
    {
      date: DataTypes.DATE,
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
