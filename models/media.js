'use strict';
module.exports = (sequelize, DataTypes) => {
  var Media = sequelize.define('Media', {
    content: DataTypes.TEXT,
    listing_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Media;
};