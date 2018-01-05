var express = require('express');
var router = express.Router();
// var quotations = require('../models/test.js');

router.get('/', function(req, res) {
    res.render('index');
    // console.log(res);
  });

module.exports = router;

router.get('/contact', function(req, res) {
    res.render('contact');
    // console.log(res);
  });

module.exports = router;