'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contactInfos',[       
      {
        id: 1,
        contact_id: 1,
        type: "home",
        number: 123123,
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
      {
        id: 2,
        contact_id: 1,
        type: "home",
        number: 123123,
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
      {
        id: 3,
        contact_id: 2,
        type: "home",
        number: 123123,
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
      {
        id: 4,
        contact_id: 3,
        type: "home",
        number: 123123,
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
