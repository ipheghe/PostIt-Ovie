module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('user_group', {
      
  });
  UserGroup.associate = (models) => {
      
    UserGroup.belongsTo(models.User, {
      foreignKey: 'userId',
     
    });    
      
    UserGroup.belongsTo(models.Group, {
      foreignKey: 'groupId',
     
    });
      
    UserGroup.hasMany(models.MessageBoard, {
      foreignKey: 'userGroupId',
      as: 'userGroupId',
    });
      
  };
    
  return UserGroup;
    
};