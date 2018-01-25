var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var popper = require('popper');
var passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

var databaseURI = 'mongodb://localhost/loginapp';

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
	} else {
	mongoose.connect(databaseURI);
}

var db = mongoose.connection;

var app = express();
var port = process.env.PORT || 3000;


// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(cookieParser());

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));
app.use("/public", express.static(__dirname + '/public'));

// Express Session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
	errorFormatter: function(param, msg, value) {
		var namespace = param.split('.'),
		root = namespace.shift(),
		formParam = root;

	while(namespace.length) {
		formParam += '[' + namespace.shift() + ']';
	}
	return {
		param : formParam,
		msg   : msg,
		value : value
		};	
	}
}));

// Connect Flash Middleware
app.use(flash());

//Global Vars
app.use(function(req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});



// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/route_controller.js');

var authRoutes = require('./authRoutes/ensure');
var users = require('./authRoutes/users');


//MySQL Routes
app.use('/', routes);

//Mongo Routes
app.use('/login', authRoutes);
app.use('/ensure', authRoutes);
app.use('/users', users);


app.listen(port, function() {
  console.log("App listening on port: " + port);
});