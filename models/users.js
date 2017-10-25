'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    address: DataTypes.TEXT,
    email: DataTypes.TEXT,
    phone_number: DataTypes.TEXT,
    picture: DataTypes.TEXT,
    privilege_level: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};