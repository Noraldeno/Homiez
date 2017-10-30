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

app.post('/', function(req, res, next){
    var input = req.body.searchBar;
    console.log("Searched for " + input);
    res.render('index', {
        title: title , 
        home: current,
        about: home + about,
        agents: home + agents,
        contact: home + contact,
        listItems: listItems,
        input: 'yeah'
    });
    /*connection.sync().then(function () {
      database.searchListings('My search query');
    });*/
});

router.get('/get-listings', function(req, res, next) {
	let connection = database.connect(); 
	

	connection.close(); 
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { about: 'About Page'});
});




module.exports = router;
