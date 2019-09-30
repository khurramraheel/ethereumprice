var tradeing = require("express").Router();;
const Trade = require("../models/trademodels");
tradeing.post('/trade',(req,res) => {
    console.log("Trade_Data",req.body)
    const { eth_price,c_balance,checkAmount,Trad_date,eth_quantity,userID  } = req.body;
    const newTrade = new Trade({
        eth_price, 
        c_balance, 
        checkAmount,
        Trad_date,
        eth_quantity,
        userID
    })
    newTrade.save().then(trade => {
        res.json({
            success: true,
            trade:trade
        })
    })
    
})
module.exports = tradeing