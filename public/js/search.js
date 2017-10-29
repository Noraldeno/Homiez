var input = document.getElementById("searchBar");
var submit = document.getElementById("submit");


submit.addEventListener("onclick", function (event){
	
	console.log('it works');
	
});

const database = require('../../db/database');
const connection = database.connect(); 

connection.sync().then(function () {

  database.searchListings(input);

});


