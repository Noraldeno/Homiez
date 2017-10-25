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

var Listings = sequelize.define('listings', {
  user_id:Sequelize.INTEGER, /* INT */                                 
  bedrooms:Sequelize.INTEGER, /* INT */
  bathrooms:Sequelize.INTEGER, /* INT */
  square_feet:Sequelize.INTEGER, /* INT */
  building_type:Sequelize.INTEGER, /* STRING */
  price:Sequelize.FLOAT, /* FLOAT */
  address:Sequelize.TEXT, /* STRING */
  kitchen:Sequelize.BOOLEAN, /* BOOLEAN */
  living_room:Sequelize.BOOLEAN, /* BOOLEAN */
  floors:Sequelize.INTEGER, /* INT */
  city:Sequelize.TEXT, /* STRING */
  zip:Sequelize.TEXT, /* STRING */
  state:Sequelize.TEXT, /* STRING */
  description:Sequelize.TEXT, /* STRING */
  parking:Sequelize.BOOLEAN, /* BOOLEAN */
  picture:Sequelize.STRING /* STRING */ 
});

var Messages = sequelize.define('Messages', {
  user_id_sent_message:Sequelize.INTEGER, 
  user_id_recieved_message:Sequelize.INTEGER, 
  message_body:Sequelize.TEXT
});

var Media = sequelize.define('media', {
  content: Sequelize.TEXT,
  listing_id: Sequelize.INTEGER
});

////////////////////////////////////////////
// 0. CONNECTION FUNCTIONS
// 1. CREATION FUNCTIONS    
// 2. FETCHING FUNCTIONS
// 3. SEARCHING FUNCTIONS  
///////////////////////////////////////////


////////////////////////////////////////////
// 0. CONNECTION FUNCTIONS 
///////////////////////////////////////////

database.connect = function () {
  return new Sequelize(databaseName, username, password, {
     host: 'localhost',
     port: 3306,
     dialect: 'mysql'
  }); 
}


////////////////////////////////////////////
// 1. CREATION FUNCTIONS      
///////////////////////////////////////////

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
        user_id: user_id, 
        bedrooms: bedrooms,
        bathrooms: bathrooms, 
        square_feet: square_feet, 
        building_type: building_type, 
        price: price, 
        address: address, 
        kitchen: kitchen, 
        living_room: living_room, 
        floors: floors, 
        city: city, 
        zip: zip, 
        state: state, 
        description: description,
        parking: parking,
        picture: picture
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
      name: name, 
      description: description, 
      address: address,
      email: email,
      phone_number: phone_number, 
      picture: picture, 
      privilege_level: privilege_level
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

database.addMessage = function (
  user_id_sent_message, /* INT */
  user_id_recieved_message, /* INT */
  message_body /* STRING */) {

  sequelize.sync().then(function () {
    Messages.create({
      user_id_sent_message:123234,
      user_id_recieved_message:23432432,
      message_body:"message_body" 
    });
  });
} 


////////////////////////////////////////////
// 2. FETCHING FUNCTIONS    
///////////////////////////////////////////

database.findListing = function (id /*INT*/) {
  sequelize.sync().then(function() {
    Listings.findById(id).then(function(listing) {
      return listing;
    });
  });
}

database.findUser = function (id /*INT*/) {
  sequelize.sync().then(function() {
    Users.findById(id).then(function(user) {
      return user; 
    });
  });
}

database.findMedia = function (id /*INT*/) {
  sequelize.sync().then(function() {
    Media.findById(id).then(function(media) {
      return media; 
    });
  });
}

database.findMessage = function (id /*INT*/) {
  sequelize.sync().then(function() {
    Messages.findById(id).then(function(message) {
      return message;
    });
  });
}


////////////////////////////////////////////
// 2. SEARCHING FUNCTIONS
///////////////////////////////////////////

database.getResults = function(query /*STRING*/) {
  console.log("THIS IS YOUR QUERY: " + query); 
}



module.exports = database; 


/*
node_modules/.bin/sequelize model:create --name Listings --attributes user_id:integer,bedrooms:integer,bathrooms:integer,square_feet:integer,building_type:text,price:float,address:string,kitchen:boolean,living_room:boolean,floors:integer,city:string,zip:string,state:string,description:text,parking:boolean,picture:text

node_modules/.bin/sequelize model:create --name Users --attributes name:text,description:text,address:text,email:text,phone_number:text,picture:text,privilege_level:integer

node_modules/.bin/sequelize model:create --name Media --attributes content:text,listing_id:integer

node_modules/.bin/sequelize model:create --name Messages --attributes user_id_sent_message:integer,message_body:text,user_id_recieved_message:integer
*/
