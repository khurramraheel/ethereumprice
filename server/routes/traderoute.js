var tradeing = require("express").Router();
// const router = require("express").Router();
let User = require('../models/user')

const Trade = require("../models/trademodels");
tradeing.post('/trade',(req,res) => {
     console.log("Trade_Data",req.body)
    let { eth_price,c_balance,checkAmount,Trad_date,eth_quantity,userID  } = req.body;
    c_balance = c_balance - checkAmount
    const newTrade = new Trade({
        eth_price, 
        c_balance, 
        checkAmount,
        Trad_date, 
        eth_quantity,
        userID
    })
    newTrade.save().then(trade => {
      User.findByIdAndUpdate(userID,{$set:{c_balance: trade.c_balance}}, (err,user)=>{
        console.log(user);
        res.json({
            success: true,
            trade:trade
        })
        
      })
    })
    
})
////////////////////////
tradeing.post('/showTrade', (req, resp) => {
  let {_id} = req.body.user
  Trade.find({userID:_id}, function (err, trades) {
    resp.json({trades})
    //  console.log(trades)

  })
})

module.exports = tradeing