var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var namespace = require('express-namespace'); 
var hbs = require('express-handlebars');


// import database 
const database = require('./db/database');
let connection = database.connect(); 

connection.sync().then(function () {

  database.searchListings('My search query');

});

// //////

var index = require('./routes/index');
var about = require('./routes/about');


var router = express.Router(); 
var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './db/database.js')));



router.use('/', index);
router.use('/about', index);
/*
router.use('/andrew', index);
router.use('/benedikt', index); 
router.use('/mena', index); 
router.use('/norald', index);*/

app.use('/fa17g15', router); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// ////////////////////////////////////////

app.get('/', function(req,res) {
  database.searchListings('My Query').then(function(results) {
    return results; 
  });
});

app.post('/', function(req, res) {
  console.log("_________________________________"); 
  console.log(req.body); 
  res.send(200);
  console.log("_________________________________"); 
  console.log("_________________________________"); 
  console.log("_________________________________"); 
  console.log("_________________________________"); 
  
});



module.exports = app;
