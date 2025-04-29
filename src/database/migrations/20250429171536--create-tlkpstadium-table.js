'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tlkpStadium', 
      {
        stadiumId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },    
      stadiumName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stadiumCity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stadiumState: {
        type: Sequelize.STRING,
        allowNull: false,
      },           
      stadiumLongitude: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      stadiumLatitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },           
      createdDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'userId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',         
      },
      updatedDateTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'user',
          key: 'userId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',                  
      },
    },
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tlkpStadium');
  }
};
