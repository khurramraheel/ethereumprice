const router = require("express").Router();
const User = require("../models/user");
// const Trade = require("../models/trademodels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require('./middleware/auth');


router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  //simple Validation
  if (!username || !email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //Check for existence
  User.findOne({ email }).then(user => {
    
    if (user) {
      return res.status(400).json({ msg: "user already exist " });
    }
    const newUser = new User({
      username,
      email,
      password
    });

    //Create Salt & Hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;

        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            "secret_key",
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                  token,
                user
              });
            }
          );
        });
      });
    });
  });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

  //simple Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //Check for existence
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "user does not exist " });
    }
   
    // Validate password
    bcrypt.compare(password, user.password)
    .then(isMatch => {
        if(!isMatch)  return res.status(400).json({msg: "Invalid Credentials"})
        
        jwt.sign(
            { id: user.id },
            "secret_key",
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                  token,
                user
              });
            }
          );
    })
  });
});



router.post("/update", (req, res) => {
  const { username, email, password , oldppassword  } = req.body;

//simple Validation
if (!email || !password) {
  return res.status(400).json({ msg: "please enter all fields" });
}


 
//Check for existence
User.findOne({ email }).then(user => {
  if (!user) {
    return res.status(400).json({ msg: "user does not exist " });
  }
 
  // Validate password
  bcrypt.compare(password, user.password)
  .then(isMatch => {
      if(!isMatch)  return res.status(400).json({msg: "Invalid Credentials"})

      const uuser = {
        username,
        email,
        password,
        oldpassword
      };

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(uuser.password, salt, (err, hash) => {
          if (err) throw err;
          console.log(hash)
          uuser.password = hash
          console.log(uuser);

        });
      })
      User.findOneAndUpdate(email , {$set:{username: user.username , password : user.password}},(err, doc) =>{
        if(err){
            console.log("Something wrong when updating data!");
        }

      

      
      

      jwt.sign(
          { id: user.id },
          "secret_key",
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
                token,
              user
            });
          }
        );
      })
  })
});
});

router.get('/user', auth,  (req, res) => {
    User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user))
})


router.post("/logout", (req, res) => {});

module.exports = router;
