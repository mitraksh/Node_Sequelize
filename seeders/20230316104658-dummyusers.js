'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',[       
      {
        id: '1',
        first_name: 'user1101',
        last_name: 'Roy 1101',
        email: 'useremail1101@email.com',
        password: 'user1101',
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
      {
        id: '2',
        first_name: 'user1102',
        last_name: 'Roy 1102',
        email: 'useremail1102@email.com',
        password: 'user1102',
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
      {
        id: '3',
        first_name: 'user1103',
        last_name: 'Roy 1103',
        email: 'useremail1103@email.com',
        password: 'user1103',
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
      {
        id: '4',
        first_name: 'user1104',
        last_name: 'Roy 1104',
        email: 'useremail1104@email.com',
        password: 'user1104',
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      },
      {
        id: '5',
        first_name: 'user1105',
        last_name: 'Roy 1105',
        email: 'useremail1105@email.com',
        password: 'user1105',
        created_at: new Date('2022-12-25'),
        updated_at: new Date('2022-12-25'),
      }
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
