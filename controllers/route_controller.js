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

router.get('/lectures', function(req, res) {
	lectures.selectAll(function(data) {
		var hbsObject = {
			lecture: data
		};
		// console.log(hbsObject);

    res.render('lectures', hbsObject);
     
     // console.log(res);
  });
});

module.exports = router;