var express = require('express');
var router = express.Router();
var url = require('url');
var database = require('../db/database.js');

/* GET home page. */
router.get('/', function(req, res, next) {

	const currentUrl = req.originalUrl;

	res.render('index', { 
		title: 'HOMIEZ' , 
		about: currentUrl + '/about'
	});

});

router.post('/', function(req, res, next) {
	let searchResultList = "My response!"
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { about: 'About Page'});
});




module.exports = router;
