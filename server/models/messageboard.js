module.exports = (sequelize, DataTypes) => {
  const MessageBoard = sequelize.define('message_board', {
      
      
  });
  MessageBoard.associate = (models) => {
      
    MessageBoard.belongsTo(models.User, {
      foreignKey: 'userId',
     
    });        
      
    MessageBoard.belongsTo(models.UserGroup, {
      foreignKey: 'userGroupId',
     
    });    
      
    MessageBoard.belongsTo(models.Message, {
      foreignKey: 'messageId',
     
    });
      
  };
    
  return MessageBoard;
    
};