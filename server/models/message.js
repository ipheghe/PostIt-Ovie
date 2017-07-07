module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
      
    messageBody: {
      type: DataTypes.STRING,
      allowNull: false,
    }
      
  });
    
  Message.associate = (models) => {
      
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
     
    }); 
      
    Message.hasMany(models.MessageBoard, {
      foreignKey: 'messageId',
      as: 'messageId',
    });
      
  };
    
  return Message;
    
};