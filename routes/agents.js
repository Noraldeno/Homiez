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

router.get('/upload', function(req, res, next) {
  res.render('upload', { 
  		title: title ,
		logo: logo,
		home: home,
		about: about,
		agents: agents,
		contact: contact,
		css: cssPath
	});
});

module.exports = router;