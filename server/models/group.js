module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('group', {
      
    groupName: {
      type: DataTypes.STRING,
      allowNull: false,
    }
      
  });
    
  Group.associate = (models) => {
    Group.hasMany(models.UserGroup, {
      foreignKey: 'groupId',
      as: 'groupId',
    });
      
  };
  return Group;
};