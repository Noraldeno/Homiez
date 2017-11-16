var express = require('express');
var router = express.Router();
var url = require('url');

var title = 'HOMIEZ';
var home = '/fa17g15';
var about = home + '/about';
var agents = home + '/agents';
var contact = home + '/contact';
var current = '#';
var currentHBS = '';
var cssPath = home + '/css/style.css';
var logo = '/fa17g15/images/logo/0201.png';

/* GET andrew page. */
router.get('/andrew', function(req, res, next) {
	currentHBS = 'andrew';
  res.render(currentHBS, { 
  		title: title ,
		logo: logo,
  		andrew: 'Andrew Patterson',
		home: home,
		about: about,
		agents: agents,
		contact: contact,
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath
	});
});

/* GET benedikt page. */
router.get('/benedikt', function(req, res, next) {
	currentHBS = 'benedikt';
	res.render(currentHBS, { 
		title: title ,
		logo: logo,
		benedikt: 'Benedikt Anselment',
		home: home,
		about: about,
		agents: home + agents,
		contact: home + contact,
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath
	});
});

/* GET mena page. */
router.get('/mena', function(req, res, next) {
	currentHBS = 'mena';
  res.render(currentHBS, { 
  		title:title,
		logo: logo,
  		mena: 'Mena Morkos',
  		home: home,
		about: about,
		agents: agents ,
		contact: contact,
		login: about + '/login',
		signUp: home + '/signUp',
		css: cssPath
	});
});

/* GET norald page. */
router.get('/norald', function(req, res, next) {
	currentHBS = 'norald';
  res.render(currentHBS, { 
  		title:title,
		logo: logo,
  		norald: 'Norald Alejo',
  		home: home,
		about: about,
		agents: agents,
		contact: contact,
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath
	});
});


/* GET Omer Aslam page. */
router.get('/omer', function(req, res, next) {
  res.render('omer', { 
  		norald: 'Omer Aslam',
  		title:title,
		logo: logo,
  		home: home,
		about: about,
		agents: agents,
		contact: contact,
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath
	});
});

/* GET Saud Habib page. */
router.get('/saudh', function(req, res, next) {
  res.render('saudh', { 
  		norald: 'Saudh Khan Lodi',
  		title:title,
		logo: logo,
  		home: home,
		about: about,
		agents: agents,
		contact: contact,
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath
	});
});

/* GET Guda Praveen Kumar page. */
router.get('/abdul', function(req, res, next) {
  res.render('abdul', { 
  		norald: 'Abdul Bari',
  		title:title,
		logo: logo,
  		home: home,
		about: about,
		agents: agents,
		contact: contact,
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath
	});
});

/* GET Abdul Bari page. */
router.get('/praveen', function(req, res, next) {
  res.render('praveen', { 
  		norald: 'Guda Praveen Kumar',
  		title:title,
		logo: logo,
  		home: home,
		about: about,
		agents: agents,
		contact: contact,
		login: home + '/login',
		signUp: home + '/signUp',
		css: cssPath
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
	});

});
module.exports = router;
