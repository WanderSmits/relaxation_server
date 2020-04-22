"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "sessions",
      [
        {
          date: "2020-04-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-03-15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-04-12",
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
