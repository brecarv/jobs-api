"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const [companies] = await queryInterface.sequelize.query(
      "SELECT id FROM companies;"
    );

    await queryInterface.bulkInsert("jobs", [
      {
        title: "Full-stack Javascript Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        limit_date: "2022-03-31",
        company_id: companies[0].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Front-end Developer (Vue.js)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        limit_date: "2022-04-15",
        company_id: companies[0].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Back-end Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        limit_date: "2022-03-31",
        company_id: companies[1].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("jobs", null, {});
  },
};
