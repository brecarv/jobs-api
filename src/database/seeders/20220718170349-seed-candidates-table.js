"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("candidates", [
      {
        name: "Arthur",
        bio: "I'm a full-stack javascript developer with experience on MERN stack.",
        email: "arthur@email.com",
        phone: "1111-1111",
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Beatrice",
        bio: "Front-end developer | React | Next.js | Typescript",
        email: "beatrice@email.com",
        phone: "2222-2222",
        open_to_work: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cecil",
        bio: "Back-end developer specialized in Java and Spring Boot.",
        email: "cecil@email.com",
        phone: "3333-3333",
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("candidates", null, {});
  },
};
