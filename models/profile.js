"use strict";
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define(
    "profile",
    {
      interval: DataTypes.INTEGER,
      duration_exercise: DataTypes.INTEGER,
      start_time: DataTypes.DATE,
      notification: DataTypes.DATE,
    },
    {}
  );
  profile.associate = function (models) {
    profile.hasOne(models.user);
  };
  return profile;
};
