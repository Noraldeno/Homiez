'use strict';
module.exports = (sequelize, DataTypes) => {
  var Listings = sequelize.define('Listings', {
    user_id: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    square_feet: DataTypes.INTEGER,
    building_type: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    address: DataTypes.STRING,
    kitchen: DataTypes.BOOLEAN,
    living_room: DataTypes.BOOLEAN,
    floors: DataTypes.INTEGER,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    state: DataTypes.STRING,
    description: DataTypes.TEXT,
    parking: DataTypes.BOOLEAN,
    picture: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Listings;
};