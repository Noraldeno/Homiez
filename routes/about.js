var express = require('express');
var router = express.Router();
var url = require('url');

var title = 'HOMIEZ';
var home = '/fa17g15';
var about = home + '/about';
var agents = home + '/agents';
var contact = home + '/contact';
var current = '#';
var cssPath = home + '/css/style.css';
var logo = '/fa17g15/images/logo/0201.png';

/* GET andrew page. */
router.get('/andrew', function(req, res, next) {
  res.render('andrew', { 
  		title: title ,
		logo: logo,
  		andrew: 'Andrew Patterson',
		home: home,
		about: current,
		agents: agents,
		contact: contact,
		css: cssPath
	});
});

/* GET benedikt page. */
router.get('/benedikt', function(req, res, next) {
	res.render('benedikt', { 
		title: title ,
		logo: logo,
		benedikt: 'Benedikt Anselment',
		home: home,
		about: current,
		agents: home + agents,
		contact: home + contact,
		css: cssPath
	});
});

/* GET mena page. */
router.get('/mena', function(req, res, next) {
  res.render('mena', { 
  		title:title,
		logo: logo,
  		mena: 'Mena Morkos',
  		home: home,
		about: current,
		agents: agents ,
		contact: contact,
		css: cssPath
	});
});

/* GET norald page. */
router.get('/norald', function(req, res, next) {
  res.render('norald', { 
  		title:title,
		logo: logo,
  		norald: 'Norald Alejo',
  		home: home,
		about: current,
		agents: agents,
		contact: contact,
		css: cssPath
	});
});


module.exports = router;
