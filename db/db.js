// Initializing database connection
const Sequelize = require('sequelize');

var credentials = require('../ENV/credentials'); 

const username = credentials.username(); 
const password = credentials.password(); 

var sequelize = new Sequelize('fa17g15', username, password, {
   host: 'localhost',
   port: 17015,
   dialect: 'mysql'
}); 

var test = sequelize.authenticate()
   .then(function () {
       console.log("CONNECTED!");
   })  
   .catch(function (err) {
       console.log(err);
   })  
   .done();
