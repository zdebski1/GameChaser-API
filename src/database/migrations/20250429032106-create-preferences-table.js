'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      { tableName: 'preferences', schema: 'public' },
      {
        preferenceId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        userFk: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        allowSmsNotifications: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        allowEmailNotifications: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        marketingOptIn: {
          type: Sequelize.BOOLEAN,
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
        },
        updatedDateTime: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        updatedBy: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'preferences', schema: 'public' });
  }
};
