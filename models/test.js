var orm = require('../config/orm.js');

var lecture = {
  selectAll: function(cb) {
    orm.selectAll('lecture', function(res) {
      cb(res);
    });
  },

  selectRand: function(cb) {
    orm.selectRand('lecture', function(res) {
      cb(res);
    });
  },

  // selectRick: function(cb) {
  //   orm.selectRick('quote', function(res) {
  //     cb(res);
  //   });
  // },

  // selectMort: function(cb) {
  //   orm.selectMort('quote', function(res) {
  //     cb(res);
  //   });
  // },

  // selectJerr: function(cb) {
  //   orm.selectJerr('quote', function(res) {
  //     cb(res);
  //   });
  // },

  // selectBeth: function(cb) {
  //   orm.selectBeth('quote', function(res) {
  //     cb(res);
  //   });
  // },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('lecture', cols, vals, function(res) {
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