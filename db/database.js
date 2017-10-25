var database = module.exports = {}; 

// Initializing database connection
const Sequelize = require('sequelize');
var credentials = require('../creds/credentials'); 

const username = credentials.username(); 
const password = credentials.password(); 
const databaseName = credentials.database(); 

var sequelize = new Sequelize(databaseName, username, password, {
   host: 'localhost',
   port: 3306,
   dialect: 'mysql'
}); 

var authenticated = sequelize.authenticate()
.then(function () {
   console.log("Connection to "+ databaseName +" database successful!");
})  
.catch(function (err) {
   console.log(err);
})  
.done();

var Users = sequelize.define('users', {
  name: Sequelize.TEXT, 
  description: Sequelize.TEXT, 
  address: Sequelize.TEXT, 
  email: Sequelize.TEXT,
  phone_number: Sequelize.TEXT,
  picture: Sequelize.TEXT,
  privilege_level: Sequelize.INTEGER
});

var Listings = sequelize.define('listings', {});

var Messages = sequelize.define('messages', {});

var Media = sequelize.define('media', {
  content: Sequelize.TEXT,
  listing_id: Sequelize.INTEGER
});

database.addListing = function (
  user_id, /* INT */                                 
  bedrooms, /* INT */
  bathrooms, /* INT */
  square_feet, /* INT */
  building_type, /* STRING */
  price, /* FLOAT */
  address, /* STRING */
  kitchen, /* BOOLEAN */
  living_room, /* BOOLEAN */
  floors, /* INT */
  city, /* STRING */
  zip, /* STRING */
  state, /* STRING */
  description, /* STRING */
  parking, /* BOOLEAN */
  picture /* STRING */ ) {

  sequelize.sync().then(function () {
      Listings.create({
        user_id, 
        bedrooms,
        bathrooms, 
        square_feet, 
        building_type, 
        price, 
        address, 
        kitchen, 
        living_room, 
        floors, 
        city, 
        zip, 
        state, 
        description,
        parking,
        picture
      });
  });

}

database.addUser = function (
  name, /* STRING */
  description, /* STRING */
  address, /* STRING */
  email, /* STRING */
  phone_number, /* STRING */
  picture, /* STRING */
  privilege_level /* INT */) {

  sequelize.sync().then(function () {
    Users.create({
      name: "Andrew", 
      description: "description", 
      address: "address",
      email: "email",
      phone_number:"phone_number", 
      picture:"picture", 
      privilege_level:123
    });
  });

}

database.addMedia = function ( 
  content, /* STRING */ 
  listing_id /* INT */ ) {

  sequelize.sync().then(function () {
    Media.create({
      content:content, 
      listing_id:listing_id
    });
  });

}

database.addMessages = function (
  user_id_sent_message, /* INT */
  user_id_recieved_message, /* INT */
  message_body /* STRING */) {

  sequelize.sync().then(function (user_id_sent_message, user_id_recieved_message, message_body) {
    Messages.create({
      user_id_sent_message,
      user_id_recieved_message,
      message_body 
    });
  });

} 

module.exports = database; 



/*
node_modules/.bin/sequelize model:create --name Listings --attributes user_id:integer,bedrooms:integer,bathrooms:integer,square_feet:integer,building_type:text,price:float,address:string,kitchen:boolean,living_room:boolean,floors:integer,city:string,zip:string,state:string,description:text,parking:boolean,picture:text

node_modules/.bin/sequelize model:create --name Users --attributes name:text,description:text,address:text,email:text,phone_number:text,picture:text,privilege_level:integer

node_modules/.bin/sequelize model:create --name Media --attributes content:text,listing_id:integer

node_modules/.bin/sequelize model:create --name Messages --attributes user_id_sent_message:integer,message_body:text,user_id_recieved_message:integer
*/
