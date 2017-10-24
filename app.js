var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var namespace = require('express-namespace'); 

// Initializing database connection
const Sequelize = require('sequelize');

// var credentials = require('../ENV/credentials'); 

const username = 'root';
const password = '';

var sequelize = new Sequelize('fa17g15', username, password, {
   host: 'localhost',
   port: 3306,
   dialect: 'mysql'
}); 

var test = sequelize.authenticate()
   .then(function () {
       console.log("CONNECTED!");
   })  
   .catch(function (err) {
       console.log(err);
   })  
   .done();

// //////

var index = require('./routes/index');
var users = require('./routes/users');
var router = express.Router(); 
var app = express();

// view engine setup
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

router.use('/', index)
router.use('/andrew', index);
router.use('/benedikt', index); 
router.use('/mena', index); 
router.use('/norald', index);

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



module.exports = app;
