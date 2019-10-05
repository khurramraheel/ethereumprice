var stock_I = require("express").Router();
// const router = require("express").Router();

const Capital = require("../models/capitalmodel");
stock_I.post('/stockissue',(req,res) => {
     console.log("stock issue Data",req.body)
    const { price,quantity,capital } = req.body;
    const newCapital = new Capital({
        price,
        quantity,
        capital
    })
    newCapital.save().then(capital => {
        
        res.json({
            success: true,
            capital:capital
        })
        console.log("response",capital)
    })
    
})
stock_I.get('/showCQ', (req, res) => {
    Capital.find({},function(err,capital){
        res.json({capital})
        console.log(capital)
    })
})
stock_I.get('/showHistory', (req, res) => {
    Capital.find({}, function (err, capital) {
        res.json({
            capital
        })
    })
})
module.exports = stock_I