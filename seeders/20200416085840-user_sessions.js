"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "userSessions",
      [
        {
          userId: 1,
          sessionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          sessionId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("userSessions", null, {});
  },
};
