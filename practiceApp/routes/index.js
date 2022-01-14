var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/customer', function(req, res, next) {
  res.render('index', { title: 'Customers' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Customer App' });
});





module.exports = router;
