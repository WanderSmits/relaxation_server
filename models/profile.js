"use strict";
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define(
    "profile",
    {
      interval: { type: DataTypes.INTEGER, allowNull: false },
      duration_exercise: { type: DataTypes.INTEGER, allowNull: false },
      start_time: DataTypes.DATE,
      notification: DataTypes.TIME,
    },
    {}
  );
  profile.associate = function (models) {
    profile.hasOne(models.user);
  };
  return profile;
};
