"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "sessions",
      [
        {
          date: "2020-01-01T08:00:00.000Z",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-03-01T08:00:00.000Z",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-02-01T08:00:00.000Z",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("sessions", null, {});
  },
};
