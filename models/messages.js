'use strict';
module.exports = (sequelize, DataTypes) => {
  var Messages = sequelize.define('Messages', {
    user_id_sent_message: DataTypes.INTEGER,
    message_body: DataTypes.TEXT,
    user_id_recieved_message: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Messages;
};