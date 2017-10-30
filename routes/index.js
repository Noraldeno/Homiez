var express = require('express');
var router = express.Router();
var url = require('url');
var about = require('./about');
var bodyParser = require('body-parser');
var database = require('../db/database.js');
var Sequelize = require('sequelize');

// var express = require('express');
// var bodyParser = require('body-parser');
var app = express(); 
router.use('/about', about);

var title = 'HOMIEZ';
var home = '/fa17g15';
var about = '/about';
var agents = '/agents';
var contact = '/contact';
var current = "#";

// var listItems = {
// 	'1': {
// 	address: 'some address', 
// 	zip: '12341', 
// 	city: 'Some city'
// 	}, 
// 	'2': {
// 	address: 'some address', 
// 	zip: '12341', 
// 	city: 'Some city'
// 	}, 
// 	'3': {
// 	address: 'some address', 
// 	zip: '12341', 
// 	city: 'Some city'
// 	}, 
// 	'4': {
// 	address: 'some address', 
// 	zip: '12341', 
// 	city: 'Some city'
// 	}, 
// 	'5': {
// 	address: 'some address', 
// 	zip: '12341', 
// 	city: 'Some city'
// 	}
// }; 

var listItems = {}; 


/* GET home page. */
router.get('/', function(req, res, next) {

	res.render('index', { 
		title: title , 
		home: current,
		about: home + about,
		agents: home + agents,
		contact: home + contact,
		search: home + '/search',
		listItems:listItems
	});

});

router.post('/search', function(req, res, next){

	var input = req.body.searchBar;
	console.log("Searched for " + input);

	var sequelize = database.connect(); 
	database.isAuthenticated(sequelize); 

	database.searchListings(input, sequelize).then(function (listings) {

	    console.log("Query: " + input); 

	    let resultList = new Array();

	    listings.forEach(function (listing) {
	      resultList.push(listing.dataValues);
	    });

	    console.log(resultList);
	    

	    res.render('index', {
	    	title: title , 
			home: current,
			about: home + about,
			agents: home + agents,
			contact: home + contact,
			search: home + '/search',
			listItems:resultList
		}); 

	});

});

/* GET about page. */
router.get('/about', function(req, res, next) {

	res.render('about', { 
		title: title , 
		home:  home, 
		about: current,
		agents: home + agents,
		contact: home + contact,
		andrewLink: home + about  + '/andrew' , 
		benediktLink: home + about  +  '/benedikt', 
		menaLink: home + about  +  '/mena', 
		noraldLink: home + about  +  '/norald'
	});

});

/* GET Agents page. */
router.get('/agents', function(req, res, next) {

	res.render('agents', { 
		title: title , 
		home: home,
		about: home + about,
		agents: current,
		contact: home + contact
	});

});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {

	res.render('contact', {  
		title: title , 
		home: home,
		about: home + about,
		agents: home + agents,
		contact: current
	});
});


module.exports = router;
