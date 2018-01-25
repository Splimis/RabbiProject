var connection = require ('./connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

var orm = {

	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput;

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	selectRand: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + " ORDER BY RAND() LIMIT 1;";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	selectBrooks: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + " WHERE LectID = 'Brooks';";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	selectChris: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + " WHERE LectID = 'Chris';";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	selectTalks: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + " WHERE LectID = 'Christopher' OR LectID = 'Brooks';";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},











	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		// console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	}

};

module.exports = orm;