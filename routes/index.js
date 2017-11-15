var express = require('express');
var router = express.Router();
var url = require('url');
//var about = require('./about');
var bodyParser = require('body-parser');
var database = require('../db/database.js');
var Sequelize = require('sequelize');
var path = require('path');

var app = express(); 

var title = 'HOMIEZ';
var home = '/fa17g15';
var about = home + '/about';
var agents = home + '/agents';
var contact = home + '/contact';
var cssPath = home + '/css/style.css'; //
var current = '#';
var currentHBS = '';

var logo = '/fa17g15/images/logo/0201.png';

var listItems = {}; 


/* GET home page. */
router.get('/', function(req, res, next) {

	currentHBS = 'index';

	res.render('index', { 
		logo: logo, 
		title: title,
		home: current,
		about: about,
		agents: agents,
		contact: contact,
		search: home + '/search',
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath,
		listItems:listItems
	});

});

router.post('/signUp', function(req, res, next){
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var username = req.body.newUsername;
	var createPassword = req.body.createPassword;
	var confirmPassword = req.body.confirmPassword;

	console.log("First Name " + firstName);
	console.log("Last Name " + lastName);
	console.log("Username " + username);
	console.log("Create Password " + createPassword);
	console.log("Confirm Password " + confirmPassword);

	res.render(currentHBS, { 
		logo: logo, 
		title: title,
		home: home,
		about: about,
		agents: agents,
		contact: contact,
		search: home + '/search',
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath,
		listItems:listItems
	});

});

router.post('/login', function(req, res, next){
	var username = req.body.username;
	var password = req.body.loginPassword;

	console.log("Username " + username);
	console.log("Password " + password);

	res.render(currentHBS, { 
		logo: logo, 
		title: title,
		home: home,
		about: about,
		agents: agents,
		contact: contact,
		search: home + '/search',
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath,
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
			logo: logo, 
			home: current,
			about: about,
			agents: agents,
			contact: contact,
			search: home + '/search',
			login: home + '/login',
			signUp: home + '/signUp',
			css: cssPath,
			listItems:resultList
		}); 

	});

});

router.get('/search', function(req, res, next) {

	res.render('index', { 
		title: title , 
		home: current,
		about: about,
		agents: agents,
		contact: contact,
		search: home + '/search',
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath,
		listItems:listItems
	});

});


/* GET about page. */
router.get('/about', function(req, res, next) {
	currentHBS = 'about';
	res.render(currentHBS, { 
		title: title ,
		logo: logo, 
		home:  home, 
		about: current,
		agents:  agents,
		contact:  contact,
		login: home + '/login',
		signUp: home + '/signUp',
		andrewLink: about  + '/andrew' , 
		benediktLink: about  +  '/benedikt', 
		menaLink: about  +  '/mena', 
		noraldLink: about  +  '/norald',
		css: cssPath
	});

});

/* GET Agents page. */
router.get('/agents', function(req, res, next) {
	currentHBS = 'agents';

	res.render(currentHBS, { 
		title: title, 
		logo: logo , 
		home: home,
		about: about,
		agents: current,
		contact: contact,
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath
	});

});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {

	currentHBS = 'contact';
	res.render(currentHBS, {  
		title: title ,
		logo: logo,
		home: home,
		about: about,
		agents: agents,
		contact: current,
		css: cssPath,
		login: home + '/login',
		signUp: home + '/signUp',
		latitude: '37.721900',
		longitude: '-122.478225'
	});
});

module.exports = router;


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
