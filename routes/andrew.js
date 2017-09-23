var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('andrew', { andrew: 'Andrew Patterson' });
});

module.exports = router;
