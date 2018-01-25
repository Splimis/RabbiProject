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

router.post('/', function(req, res) {
  quotations.insertOne([
    'subject',
    'LectID',
    'date',
    'location'
  ], [
    req.body.subject,
    req.body.LectID,
    req.body.date,
    req.body.location
  ], function(data) {
    res.redirect('/ensure/admin');
  });
});

module.exports = router;