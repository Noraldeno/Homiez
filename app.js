var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var namespace = require('express-namespace'); 
var hbs = require('express-handlebars');


// // // import database;
// const database = require('./db/database');
// var connection = database.connect(); 

// database.isAuthenticated(connection); 

// database.addListing(
//   7, /* INT */                                 
//   9, /* INT */
//   5, /* INT */
//   2000, /* INT */
//   "House", /* STRING */
//   750000.5, /* FLOAT */
//   "1 Hacker Way", /* STRING */
//   true, /* BOOLEAN */
//   true, /* BOOLEAN */
//   4, /* INT */
//   "Menlo Park", /* STRING */
//   "94025", /* STRING */
//   "California", /* STRING */
//   "description", /* STRING */
//   true, /* BOOLEAN */
//   "/images/andrew-background.jpeg" /* STRING */ 
//   );

// //////

var index = require('./routes/index');
var about = require('./routes/about');
var agents = require('./routes/agents');

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
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(lessMiddleware(path.join(__dirname, 'public')));

router.use('/', index);
router.use('/about', about);
router.use('/agents', agents);

router.use(express.static(path.join(__dirname, 'public')));
router.use(express.static(path.join(__dirname, 'db/media')));
// app.use(express.static(path.join(__dirname, './db/database.js')));
// app.use(express.static(path.join(__dirname, './public/js/search.js')));
// app.use(express.static(path.join(__dirname, './public/css/style.css')));
// app.use('/style', express.static(path.join(__dirname, '/public/css/style')));
// app.use('/search', express.static(path.join(__dirname, '/public/js/search')));
// app.use('/css', express.static(path.join(__dirname, 'public')));

//app.use('/css', express.static(path.join(__dirname, 'public')));
//app.use('/js', express.static(path.join(__dirname, 'public')));

router.use('/', index);
router.use('/about', index);
router.use('/agents', index);

app.use('/fa17g15', router); 

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
router.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// ////////////////////////////////////////

router.get('/', function(req,res) {
  database.searchListings('My Query').then(function(results) {
    return results; 
  });
});

router.post('/', function(req, res) {
  console.log('______________________');
  console.log('______________________');
  console.log('______________________');
  console.log('______________________');

  console.log(req.body); 
  res.send(200);
});

app.use('/fa17g15/', router); 


module.exports = app;
