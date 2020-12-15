var express = require('express');
var forgotpasswordRouter = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var User = require('./loginmodel');
const imageModel = require('./imageModel');
const billingInfoModel = require('./billingInfomodel');
const auth=require('./middleware')
const multer = require('multer');
var path = require('path');
const csvtojson = require("csvtojson");
const Json2csvParser = require("json2csv").Parser;
const fs = require('fs');
const { json } = require('body-parser');

const mongodb = require("mongodb").MongoClient;
//node mailer for email via node js
var nodemailer = require('nodemailer');
const { $where } = require('./loginmodel');

const paypal = require('paypal-rest-sdk');
var request = require('request');
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AUBHMO27NrctpTp3aWnFcZJho33ki4ce_HdN2XJ3K2vAp3jLGcwf24D357okYnd923-EGwUIohqgxCmR',
  'client_secret': 'EJHtQGwpX2hj_fdEcUCdyG5KSYroll8-liIM7zhdqMIi5MFU45JBHDneBgFZHCmb0YTTf80gk-QH7jfj'
});
//csv to json
var output = [];

var CLIENT =
  'AUBHMO27NrctpTp3aWnFcZJho33ki4ce_HdN2XJ3K2vAp3jLGcwf24D357okYnd923-EGwUIohqgxCmR';

var SECRET =
  'EJHtQGwpX2hj_fdEcUCdyG5KSYroll8-liIM7zhdqMIi5MFU45JBHDneBgFZHCmb0YTTf80gk-QH7jfj';

var PAYPAL_API = 'https://api.sandbox.paypal.com';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    // console.log(file);
    cb(null, file.originalname);
    // path.extname
  }
});

const upload = multer({ storage: storage });



forgotpasswordRouter.post('/reset', async function (req, res) {
//try{
const {email}=req.body;

  User.find({ email: req.body.email })
  .exec()
  .then(user=>{
if(!user){
  return res.send({message:"user does not exist"})
}
const token = jwt.sign(
            {
              email
             // password: response[0].password
            },
            "sgdiudhwedh",
            {
                expiresIn: "5m"
            }
          );
  User.updateOne({ "email": email, },{resetToken:token}, (err,success)=>{
if(err){
  return res.send({error:"reset password link error"})
}else{
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'premj4253@gmail.com',
    pass: 'put above gmail password'
  }
});

var mailOptions = {
  from: 'no-replay@prem.com',
  to: 'premj4253@gmail.com',
  subject: 'password reset',
  html: `<p>you requested for passsword reset</p>
<h5>click on this <a href="http://localhost:4200/update/${token}">link</a>to reset password</h5>`
};
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
    return res.send(err)
  } else {
    //console.log('Email sent: ' + info.response);
    return res.send({message:"Email link has been sent , Kindly follow Instructions"})
  }
});
}
User.find({email:req.body.email}).then(result=>{
  return res.send(result)
})
//return res.send(success)
})

  })
 
.catch(err => {
       console.log(err);
      res.status(500).json({
        error: "somethinf went wrong here"
       });
     });
})


forgotpasswordRouter.put('/updatepassword', async function(req,res){
  

  //const token = req.body.token
  //console.log(token,req.body.formvalue.passsword)
  const {formvalue,token}=req.body;
  console.log(token);
  console.log(formvalue)
  //console.log(req.headers)
  //convert this password in hasH and update it after chechking reset token
  User.find({ resetToken: req.body.token })
  .then(token=>{
if(!token){
  return res.send({error:"token expired or token problem"})
}else{
  bcrypt.hash(formvalue, 10, function(err, hash) {
if(err){
  
return res.send({error:"something went wrong during hashing password at time of updating password"})
}else{
  console.log(hash)
  User.updateOne({ "resetToken": req.body.token, },{password:hash}, (err,success)=>{
if(err){
  return res.send({error:"error ocured in /updatepassword during update hashed password"})
}else{
  return res.send({message:"password has been successfully update"})
}
  })//update
}
  })//hash
 
}
  })
  .catch(err => {
    console.log(err);
   res.status(500).json({
     error: "somethinf went wrong here"
    });
  });
   
 // return res.send({password:req.body.formvalue,token:req.body.token})

// User.find({email:req.body.email})
// .then(user=>{

//   if(!user){
//     return res.send({message:"user does not exist"})
//   }else{
//     User.updateOne({ "email": email, },{password:token}, (err,success)=>{
//       if(err){
//         return res.send({error:"something went wrong at time of updating password"});
//       }else{

//       }

//     })
//   }

// })
// .catch(err => {
//   console.log(err);
//  res.status(500).json({
//    error: "somethinf went wrong here"
//   });
// });

})

forgotpasswordRouter.post('/filldata', upload.single('images'), function(req,res){

//const data: fs.readFileSync(req.file.path),
// read binary data
var imagedata= fs.readFileSync(req.file.path);
//// convert binary data to base64 encoded string
var base64data=imagedata.toString('base64');
var data=new imageModel({
  img: 
  { 
     // data: fs.readFileSync(req.file.path), 
     data:base64data,
      contentType: 'image/png' 
  } ,
imagename:req.body.imagename,
priceBeforeDiscount:req.body.priceBeforeDiscount,
priceAfterDiscount:req.body.priceAfterDiscount,
date:req.body.date
})
console.log(req.body)
//{a:images,b:imagename,c:price,d:date}
imageModel.create(data, function (err, post) {
  if (err) {
    console.log(err);
  }
  else {
    //console.log(req.body.img)
    console.log(post);
    //res.json bhi likh sakte hai no problem
    return res.send(post);
  }
});
 //res.send(req.body)

})

forgotpasswordRouter.get('/productdeatil' ,async function(req,res){

  imageModel.find(function (err, post) {
    if (err) {
      console.log(err);
    }
    else {
      //console.log(post)
      res.send({data:post});
    }
  })
})


forgotpasswordRouter.post('/billing', function (req, res) {

  billingInfoModel.create(req.body, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(data);
      //res.json bhi likh sakte hai no problem
      return res.send(data);
    }
  });
});

forgotpasswordRouter.post('/search' ,async function(req,res){
  console.log(req.body.data)
 //let result=await imageModel.find({imagename:req.body.a});
 let result=await imageModel.find({ $text: { $search: req.body.a }});
 return res.send({output:result})
 //console.log(result)
})

// forgotpasswordRouter.post('/payment', (req, res) => {
// //console.log(req.body.a)

//   // res.header("Access-Control-Allow-Origin", "*");
//   //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
//   // res.setHeader('Access-Control-Allow-Origin', '*');
//   //console.log(req.body)
//   var create_payment_json = {
//     "intent": "sale",
//     "payer": {
//         "payment_method": "paypal"
//     },
//     "redirect_urls": {
//       "return_url": "http://localhost:3000/forgotpassword/success",
//       "cancel_url": "http://localhost:3000/forgotpassword/cancel"
//     },
//     "transactions": [{
//         "item_list": {
//             "items": [{
//               "name": "Foto 1",
//               "currency": "USD",
//               "sku": "10",
//               "quantity": "1",
//               "price": req.body.a
//             },
//             {}
//           ]
//         },
//         "amount": {
//             "currency": "USD",
//             "total":req.body.a
//         },
//         "description": "Thank you for shopping from us"
//     }]
// };
 
 
// paypal.payment.create(create_payment_json, function (error, payment) {
 
//   if (error) {
//     console.log(error)
//     //throw error;
//      return res.send(error)
//   } else {
//       for(let i = 0;i < payment.links.length;i++){
//         if(payment.links[i].rel === 'approval_url'){
//           res.redirect(payment.links[i].href);
// }
//       }
//       console.log(payment)
//       //res.send(payment)
//   }
 
// });

// });

// forgotpasswordRouter.get('/success', (req, res) => {
//   const payerId = req.query.PayerID;
//   const paymentId = req.query.paymentId;
//   console.log(req.body);
//   console.log(req.query)
//   console
// console.log(req.body.a);
//   const execute_payment_json = {
//     "payer_id": payerId,
//     // "transactions": [{
//     //     "amount": {
//     //         "currency": "USD",
//     //         "total": "55"
//     //     }
//     // }]
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

// forgotpasswordRouter.get('/cancel', (req, res) => res.send('Cancelled'));


forgotpasswordRouter.post('/my-api/create-payment/', function (req, res) {

  console.log(req.body.a)
  // 2. Call /v1/payments/payment to set up the payment
  request.post(PAYPAL_API + '/v1/payments/payment',
    {
      auth:
      {
        user: CLIENT,
        pass: SECRET
      },
      body:
      {
        intent: 'sale',
        payer:
        {
          payment_method: 'paypal'
        },
        transactions: [
          {
            amount:
            {
              total: req.body.a,
              currency: 'USD'
            }
          }],
        redirect_urls:
        {
          return_url: 'http://localhost:4200/success',
          cancel_url: 'https://localhost:4200/failure'
        }
      },
      json: true
    }, function (err, response) {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    // 3. Return the payment ID to the client
    return res.json(
      {
        id: response.body.id
      });
  });
});

forgotpasswordRouter.post('/my-api/execute-payment/', function (req, res) {
  // 2. Get the payment ID and the payer ID from the request body.
  var paymentID = req.body.paymentID;
  var payerID = req.body.payerID;
  // 3. Call /v1/payments/payment/PAY-XXX/execute to finalize the payment.
  request.post(PAYPAL_API + '/v1/payments/payment/' + paymentID +
    '/execute',
    {
      auth:
      {
        user: CLIENT,
        pass: SECRET
      },
      body:
      {
        payer_id: payerID,
        transactions: [
          {
            amount:
            {
              total: req.body.a,
              currency: 'USD'
            }
          }]
      },
      json: true
    },
    function (err, response) {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      // 4. Return a success response to the client
      return res.json(
        {
          status: 'success'
        });
    });
  })

  forgotpasswordRouter.post('/token',(req,res)=>{


    const token = jwt.sign({ name: "prem" }, "abcdefgh", { expiresIn: '1min' });

    //return res.header('x-auth-token',token).send({result:"success"});
    return res.send({token:token})

  })

  forgotpasswordRouter.post('/sendtoken',(req,res)=>{
    console.log(req.body.a)
    console.log(req.headers.authorization)
        //const token = jwt.sign({ sub: "prem" }, "abcdefgh", { expiresIn: '7d' });
        return res.send({data:req.body.a})
      })

module.exports = forgotpasswordRouter;