'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tlkpTeam', 
      {
        teamId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      stadiumFk: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tlkpStadium',
          key: 'stadiumId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',     
    },      
      teamShortName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      teamLongName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sportLeagueShortName: {
        type: Sequelize.STRING,
        allowNull: false,
      },           
      sportLeagueLongName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      leagueDivision: {
        type: Sequelize.STRING,
        allowNull: false,
      },           
      divisionName: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('tlkpTeam');
  }
};
