var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {

	var currentUrl = req.originalUrl 

	res.render('index', { 
		title: 'Team 15' , 
		andrewLink: currentUrl + '/andrew' , 
		benediktUrl: currentUrl + '/benedikt', 
		menaUrl: currentUrl + '/mena', 
		noraldUrl: currentUrl + '/norald'
	});
	
});

/* GET andrew page. */
router.get('/andrew', function(req, res, next) {
  res.render('andrew', { andrew: 'Andrew Patterson'});
});

/* GET benedikt page. */
router.get('/benedikt', function(req, res, next) {
	res.render('benedikt', { benedikt: 'Benedikt Anselment' });
});

/* GET mena page. */
router.get('/mena', function(req, res, next) {
  res.render('mena', { mena: 'Mena Morkos' });
});

/* GET norald page. */
router.get('/norald', function(req, res, next) {
  res.render('norald', { norald: 'Norald Alejo' });
});

function fullUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
}

module.exports = router;
