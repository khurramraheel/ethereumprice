var mongoose = require('mongoose');

// User Schema
var User = mongoose.model('users', {
  username: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  c_balance: {
    type: Number,
  },
});
module.exports = User;

