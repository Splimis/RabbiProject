var orm = require('../config/orm.js');

var lecture = {
  selectAll: function(cb) {
    orm.selectAll('brooks', function(res) {
      cb(res);
    });
  },

  selectBrooks: function(cb) {
    orm.selectBrooks('brooks', function(res) {
      cb(res);
    });
  },

  selectChris: function(cb) {
    orm.selectChris('chris', function(res) {
      cb(res);
    });
  },

  selectTalks: function(cb) {
    orm.selectTalks('talks', function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('talks', cols, vals, function(res) {
      cb(res);
    });
  },

  // updateOne: function(objColVals, condition, cb) {
  //   orm.updateOne('quote', objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // }
};

module.exports = lecture;