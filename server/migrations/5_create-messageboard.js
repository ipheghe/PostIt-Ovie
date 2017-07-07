module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('message_boards', {
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
        userGroupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user_groups',
          key: 'id',
          as: 'userGroupId',
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('message_boards'),
};