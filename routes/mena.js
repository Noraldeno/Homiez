var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mena', { mena: 'Mena Morkos' });
});

module.exports = router;
