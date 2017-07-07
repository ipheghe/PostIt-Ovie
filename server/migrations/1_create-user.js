module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
      
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
      
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
      
    phoneNumber: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
    },
      
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
      
    userRole: {
        type: Sequelize.STRING,
        allowNull: true
    },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('users'),
};