var express = require('express');
var router = express.Router();
var lectures = require('../models/test.js');

router.get('/', function(req, res) {
    res.render('index');
    // console.log(res);
  });

router.get('/contact', function(req, res) {
    res.render('contact');
    // console.log(res);
  });

router.get('/brooks', function(req, res) {
    res.render('brooks');
    // console.log(res);
  });

router.get('/christopher', function(req, res) {
    res.render('christopher');
    // console.log(res);
  });

router.get('/admin', function(req, res) {
    res.render('admin');
    // console.log(res);
  });

router.get('/lectures', function(req, res) {

	lectures.selectTalks(function(data) {

		var hbsObject = {
			talks: data,
		};

		// console.log(hbsObject);
    
    res.render('lectures', hbsObject);
     
     // console.log(res);
  });
});

module.exports = router;