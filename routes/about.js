var express = require('express');
var router = express.Router();
var url = require('url');

var title = 'HOMIEZ';
var home = '/fa17g15';
var about = '/about';
var agents = '/agents';
var contact = '/contact';
var current = "#";

/* GET andrew page. */
router.get('/andrew', function(req, res, next) {
  res.render('andrew', { 
  		title:title ,
  		andrew: 'Andrew Patterson',
		home: home,
		about: current,
		agents: home + agents,
		contact: home + contact
	});
});

/* GET benedikt page. */
router.get('/benedikt', function(req, res, next) {
	res.render('benedikt', { 
		title:title ,
		benedikt: 'Benedikt Anselment',
		home: home,
		about: current,
		agents: home + agents,
		contact: home + contact
	});
});

/* GET mena page. */
router.get('/mena', function(req, res, next) {
  res.render('mena', { 
  		title:title ,
  		mena: 'Mena Morkos',
  		home: home,
		about: current,
		agents: home + agents ,
		contact: home + contact
	});
});

/* GET norald page. */
router.get('/norald', function(req, res, next) {
  res.render('norald', { 
  		title:title ,
  		norald: 'Norald Alejo',
  		home: home,
		about: current,
		agents: home + agents,
		contact: home + contact
	});
});


module.exports = router;
