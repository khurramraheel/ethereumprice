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
  // balance: {
  //   type: Number,
  //   required: true
  // },
});
//Trade schema
var Trade = mongoose.model('trades',{
  eth_price: {
      type: String,
      required: true
    },
    c_balance: {
      type: String,
      required: true
    },
    checkAmount: {
      type: Number,
      required: true
    }
})
module.exports = User;
module.exports = Trade;
