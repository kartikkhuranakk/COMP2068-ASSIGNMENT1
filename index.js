
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Index', { title: 'Index' });
});

/* GET About page. */
router.get('/About', function(req, res, next) {
  res.render('About', { title: 'About' });
});

/* GET Projetcs page. */
router.get('/Projects', function(req, res, next) {
  res.render('Projects', { title: 'Projects' });
});

/* GET Service page. */
router.get('/Service', function (req, res, next) {
    res.render('Service');
});
/* GET Contact page. */
router.get('/Contact', function (req, res, next) {
    res.render('Contact');
});

module.exports = router;
