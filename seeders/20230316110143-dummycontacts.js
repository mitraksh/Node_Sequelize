'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contacts',[       
      {
        id: 1,
        user_id: 1,
        name: "mitraksh",
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
      {
        id: 2,
        user_id: 1,
        name: "mitraksh",
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
      {
        id: 3,
        user_id: 2,
        name: "mitraksh",
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
      {
        id: 4,
        user_id: 3,
        name: "mitraksh",
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
