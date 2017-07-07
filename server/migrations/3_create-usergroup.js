module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('user_groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    
        userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          as: 'userId',
        },
      },  
        groupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'groups',
          key: 'id',
          as: 'groupId',
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('user_groups'),
};