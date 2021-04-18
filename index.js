var express = require('express');
var app = express();
const paypal = require('paypal-rest-sdk');
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': '',
  'client_secret': ''
});
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

var CLIENT =
  '';

var SECRET =
  '';

var PAYPAL_API = 'https://api.sandbox.paypal.com';

  var path = require('path');

  var passport = require('passport');

  // app.get('/', function (req, res) {
  //   res.send('Hello World!');
  // });
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });


  app.use(express.urlencoded({ extended: true }));

  var router= require('./route');

 

  var forgotpasswordRouter = require('./forgotpasswordAndEcomerceRoute');

  var passportloginRouter=require('./passportRoute')
  //login route

  var publicDir = require('path').join(__dirname, './uploads');
  app.use(express.static(publicDir));

  var blogAppRouter = require('./blogAppRoute')
  var cors = require('cors');
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(cors());
  
//passport js , if umcomment below line it will through error
require('./passport-config');

//var session = require("express-session");
// app.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true,
// }));

//app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());  


  app.use('/', router);

  app.use('/forgotpassword', forgotpasswordRouter);

  app.use('/passportlogin', passportloginRouter);

  app.use('/course', blogAppRouter);
  //ejs
  ///app.set("view engine", "ejs"); 

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/ace', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

    