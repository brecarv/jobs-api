"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("companies", [
      {
        name: "Nubank",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        website: "https://nubank.com.br",
        email: "email@nubank.com.br",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Magazine Luiza",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        website: "https://magazineluiza.com.br",
        email: "beatrice@email.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "OneBitCode",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        website: "onebitcode.com",
        email: "email@onebitcode.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("companies", null, {});
  },
};
