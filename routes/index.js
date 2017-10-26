var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {

	var currentUrl = req.originalUrl;

	res.render('index', { 
		title: 'HOMIEZ' , 
		about: currentUrl + '/about'
	});

});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { about: 'About Page'});
});



module.exports = router;
