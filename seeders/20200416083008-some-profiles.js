"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "profiles",
      [
        {
          interval: 3,
          duration_exercise: 6,
          start_time: new Date(),
          notification: "18:00",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          interval: 4,
          duration_exercise: 4,
          start_time: new Date(),
          notification: "08:00",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("profiles", null, {});
  },
};
