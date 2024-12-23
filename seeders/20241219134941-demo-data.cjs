'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [{
    email: 'john@doe.com',
    password: '123',
    createdAt: new Date(),
    updatedAt: new Date(),
   }])
   await queryInterface.bulkInsert('Properties', [{
    address: '1 rue du test',
    price: 1000,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
   }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Properties', null, {})
    await queryInterface.bulkDelete('Users', null, {})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
