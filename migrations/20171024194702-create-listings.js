'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      bathrooms: {
        type: Sequelize.INTEGER
      },
      square_feet: {
        type: Sequelize.INTEGER
      },
      building_type: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.FLOAT
      },
      address: {
        type: Sequelize.STRING
      },
      kitchen: {
        type: Sequelize.BOOLEAN
      },
      living_room: {
        type: Sequelize.BOOLEAN
      },
      floors: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      parking: {
        type: Sequelize.BOOLEAN
      },
      picture: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Listings');
  }
};