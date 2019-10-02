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
    })
    
})
module.exports = stock_I