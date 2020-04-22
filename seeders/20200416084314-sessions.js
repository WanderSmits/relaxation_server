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
        {
          date: "2020-03-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-03-11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-02-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-02-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-03-05",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-01-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-01-26",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-01-25",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-02-22",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-03-11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-01-23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-03-02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-04-14",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-04-23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-04-22",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-04-24",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-04-16",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-04-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2020-04-19",
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
