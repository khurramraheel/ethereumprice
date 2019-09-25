var express = require("express");
require("./config/db");
// require("./config/localDb");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var passport = require("passport");
var Trade = require("./models/tradeSchema");
var LocalStrategy = require("passport-local").Strategy;
const cors = require('cors')

const userRoutes = require("./routes/userRoutes");
const blogRoutes=require("./routes/blogRoutes");

var app = express();
var port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoutes);
app.use(blogRoutes);

app.post('/trade',(req,res) => {
    // console.log(req.body)
    const { eth_price,c_balance,checkAmount  } = req.body;
    const newTrade = new Trade({
        eth_price, 
        c_balance, 
        checkAmount,
    })
    newTrade.save().then(trade => {
        res.json({
            success: true,
            trade:trade
        })
    })
    
})
app.listen(port, () => console.log(`App listening on port ${port}`));


