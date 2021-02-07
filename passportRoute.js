var express = require('express');
var passportloginRouter = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User=require('./passportmodel');

//require('./passport-config');

passportloginRouter.post('/register', function (req, res) {
    User.create(req.body, function (err, post) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(post);
        //res.json bhi likh sakte hai no problem
        return res.send(post);
      }
    });
  });

passportloginRouter.post('/login', function(req, res, next) {
    console.log(req.body)
    passport.authenticate('local', function(err, user, info) {
      if (err) { 
          //return next(err); 
            return res.send(err)
    }
      if (!user) { res.json({success:false,status:'unsuccessful Login'}) }
      else{
          return res.send({result:"successfull login"})
      }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({success:true,status:'you are successfully logged in'})
     });
    })(req, res, next);
    //res.send({result:"success"})
  });

module.exports = passportloginRouter;

