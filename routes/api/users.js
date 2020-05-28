const express = require("express")
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/',(req,res) => res.send('User route'));

router.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
    res.json({
      message : 'Signup successful',
      user : req.user
    });
    
  });

module.exports = router;