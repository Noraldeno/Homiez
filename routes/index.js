var express = require('express');
var router = express.Router();
var url = require('url');

var about = require('./about');

router.use('/about', about);

var title = 'HOMIEZ';
var home = '/fa17g15';
var about = '/about';
var agents = '/agents';
var contact = '/contact';
var current = "#";

var listItems = {
	'1': {
	address: 'some address', 
	zip: '12341', 
	city: 'Some city'
	}, 
	'2': {
	address: 'some address', 
	zip: '12341', 
	city: 'Some city'
	}, 
	'3': {
	address: 'some address', 
	zip: '12341', 
	city: 'Some city'
	}, 
	'4': {
	address: 'some address', 
	zip: '12341', 
	city: 'Some city'
	}
}; 


/* GET home page. */
router.get('/', function(req, res, next) {

	res.render('index', { 
		title: title , 
		home: current,
		about: home + about,
		agents: home + agents,
		contact: home + contact,
		listItems:listItems
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
