var express = require('express');
var router = express.Router();



//admin
router.get('/admin', ensureAuthenticated, function(req, res) {
	res.render('admin');
});

//ensuring the user trying to access the admin page is actually logged in.
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		// console.log("this compiles");
		return next();
	} else {
		// console.log("this also compiles");
		req.flash('error_msg', 'You are not logged in');
		res.redirect('/');
	}
}

module.exports = router;