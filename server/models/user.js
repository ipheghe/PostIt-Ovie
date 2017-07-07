module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
      
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
      
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
      
    phoneNumber: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
      
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
      
    userRole: {
        type: DataTypes.STRING,
        allowNull: true
    }
      
  });
    
  User.associate = (models) => {
    User.hasMany(models.UserGroup, {
      foreignKey: 'userId',
      as: 'userGroups',
    });
      
    User.hasMany(models.Message, {
      foreignKey: 'userId',
      as: 'creatorName',
    });
           
    User.hasMany(models.MessageBoard, {
      foreignKey: 'userId',
      as: 'receipentId',
    });
      
  };
    
  return User;
    
};