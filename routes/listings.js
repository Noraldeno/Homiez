var express = require('express');
var router = express.Router();

const database = require('../db/database');
const connection = database.connect(); 

connection.sync().then(function () {

  database.searchListings('My search query');

});