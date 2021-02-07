var express = require('express');
var app = express();
const paypal = require('paypal-rest-sdk');
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AUBHMO27NrctpTp3aWnFcZJho33ki4ce_HdN2XJ3K2vAp3jLGcwf24D357okYnd923-EGwUIohqgxCmR',
  'client_secret': 'EJHtQGwpX2hj_fdEcUCdyG5KSYroll8-liIM7zhdqMIi5MFU45JBHDneBgFZHCmb0YTTf80gk-QH7jfj'
});
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

var CLIENT =
  'AUBHMO27NrctpTp3aWnFcZJho33ki4ce_HdN2XJ3K2vAp3jLGcwf24D357okYnd923-EGwUIohqgxCmR';

var SECRET =
  'EJHtQGwpX2hj_fdEcUCdyG5KSYroll8-liIM7zhdqMIi5MFU45JBHDneBgFZHCmb0YTTf80gk-QH7jfj';

var PAYPAL_API = 'https://api.sandbox.paypal.com';

//app.set('view engine', 'ejs');

//app.get('/', (req, res) => res.render('index'));


  // app.post('/pay', (req, res) => {
  //   const create_payment_json = {
  //     "intent": "sale",
  //     "payer": {
  //         "payment_method": "paypal"
  //     },
  //     "redirect_urls": {
  //         "return_url": "http://localhost:3000/success",
  //         "cancel_url": "http://localhost:3000/cancel"
  //     },
  //     "transactions": [{
  //         "item_list": {
  //             "items": [{
  //                 "name": "Red Sox Hat",
  //                 "sku": "001",
  //                 "price": "25.00",
  //                 "currency": "USD",
  //                 "quantity": 1
  //             }]
  //         },
  //         "amount": {
  //             "currency": "USD",
  //             "total": "25.00"
  //         },
  //         "description": "Hat for the best team ever"
  //     }]
  // };

  // paypal.payment.create(create_payment_json, function (error, payment) {
  //   if (error) {
  //       throw error;
  //   } else {
  //       for(let i = 0;i < payment.links.length;i++){
  //         if(payment.links[i].rel === 'approval_url'){
  //           res.redirect(payment.links[i].href);
  //         }
  //       }
  //   }
  // });

  // });

  // app.get('/success', (req, res) => {
  //   const payerId = req.query.PayerID;
  //   const paymentId = req.query.paymentId;

  //   const execute_payment_json = {
  //     "payer_id": payerId,
  //     "transactions": [{
  //         "amount": {
  //             "currency": "USD",
  //             "total": "25.00"
  //         }
  //     }]
  //   };

  //   paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
  //     if (error) {
  //         console.log(error.response);
  //         throw error;
  //     } else {
  //         console.log(JSON.stringify(payment));
  //         res.send('Success');
  //     }
  // });
  // });

  // app.get('/cancel', (req, res) => res.send('Cancelled'));


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

 

  var forgotpasswordRouter = require('./forgotpasswordRoute');

  var passportloginRouter=require('./passportRoute')
  //login route

  var publicDir = require('path').join(__dirname, './uploads');
  app.use(express.static(publicDir));

  var addCourseRouter = require('./addCourseRoute')
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

  app.use('/course', addCourseRouter);
  //ejs
  ///app.set("view engine", "ejs"); 

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/ace', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

    