var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('./studentmodel');
var educator = require('./educatorsecuritymodel')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var User = require('./loginmodel');

const multer = require('multer');
var path = require('path');
const csvtojson = require("csvtojson");
//const fastcsv = require("fast-csv");
//const ws = fs.createWriteStream("uploads/sample.csv");
const Json2csvParser = require("json2csv").Parser;
const fs = require('fs');
const { db } = require('./studentmodel');

const imageModel = require('./imageModel');
const { json } = require('body-parser');
const mongodb = require("mongodb").MongoClient;
//node mailer for email via node js
var nodemailer = require('nodemailer');
var auth=require('./middleware')
//csv to json
var output = [];

var request = require("request");

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

require('dotenv').config();   //

console.log(process.env.SECRET_KEY)  //to access env variable

/* GET ALL Student */
router.get('/', function (req, res,) {
 let abc=4;
  Student.find(function (err, post) {
    if (err) {
      console.log(err);
    }
    else {

      let ram=post;
      res.json(post);
    }
  });
});

/* Post  Student */
router.post('/add', function (req, res) {
  Student.create(req.body, function (err, post) {
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


/* UPDATE Student */
router.put('/update/:id', function (req, res) {
  Student.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(req.params.id) }, req.body, { new: true }, function (err, post) {
    if (err) {
      console.log(err)
    } else {
      //console.log(id);
      console.log(req.body)
      console.log(post)
      return res.json(post);
    }

  });
});

router.delete('/delete/:id', function (req, res) {
  Student.findByIdAndRemove({ _id: new mongoose.Types.ObjectId(req.params.id) }, function (err, post) {
    if (err) {
      console.log(err)
    } else {
      console.log(post)
      return res.json(post);
    }

  });
});
//uploading CSV FILE
//single me jo csvFile pass kar rahe hai wo .ts ke formData ka key hai.
router.post('/uploadfile', upload.single('csvFile'), (req, res) => {
  try {
    //   csvtojson()
    // .fromFile("uploads/sample.csv")
    // .then(csvData => {
    //   console.log(csvData);
    // })
    //console.log(req.file.mimetype)
    //console.log(path.extname(req.file))
    let url = "mongodb://localhost:27017/";
    // console.log(req.file)
    console.log(req.file.path)
    csvtojson()
      .fromFile(req.file.path)
      .then(csvData => {
        console.log(csvData);
        //cconssole.log(csv)
        //output.push(csvData);
        mongodb.connect(
          url,
          { useNewUrlParser: true, useUnifiedTopology: true },
          (err, client) => {
            if (err) throw err;

            client
              .db("ace")
              .collection("converttojson")
              .insertMany(csvData, { upsert: true }, { unique: true }, (err, res) => {
                if (err) throw err;

                console.log(`Inserted: ${res.insertedCount} rows`);

                client.close();
              });
          }
        );
      });
    //output of file not csv to json
    //console.log(req.file)

    // return res.status(201).json({
    //   message: 'File uploded successfully'})
    return res.send(req.file);
  } catch (err) {
    return res.sendStatus(400);
  }
});

//to download csv file
router.get('/downloadcsvfile', function (req, res,) {

  try {

    let url = "mongodb://localhost:27017/";
    console.log(req.file)
    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client
          .db("ace")
          .collection("converttojson")
          .find({})
          .toArray((err, data) => {
            if (err) throw err;
            console.log(data);
            const json2csvParser = new Json2csvParser({ header: true });
            const csvData = json2csvParser.parse(data);
            //output=data;


            fs.writeFile("sample.csv", csvData, function (error) {
              if (error) throw error;
              console.log("Write to sample.csv successfully!");
              console.log(csvData)
              return res.send(data);
            });

            client.close();
          });
      }
    );

  } catch (err) {
    return res.sendStatus(400);
  }

});
//UPLOADINGIMAGE
router.post('/uploadImageFile', upload.single('csvFile'), (req, res) => {
  var obj = {

    img: {
      data: fs.readFileSync(req.file.path),
      //data:req.file.path,
      contentType: 'image/png',
    }
  }
  imageModel.create(obj, function (err, post) {
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
});
//DOWNLOADING IMAGE 
router.get('/downloadImagefile', function (req, res,) {

  //id:5f43ddda1446f75da01df18b from database

  imageModel.findById("5f6d0c79a9d6f0352c5c4716", (err, items) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(items)
      res.send(items);
    }
  });

});

//educator router

router.put("/educator/:id", function (req, res) {

  //var obj = JSON.parse(req.body);
  var value = req.body;
  //req.body ko string me chnage karna parega

  //
  educator.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(req.params.id) }, { status: req.body.a }, { new: true }, function (err, post) {
    if (err) {

      console.log(req.body)
      console.log(err)
    } else {
      //console.log(id);
      console.log(req.body)
      console.log(post)
      console.log(req.params.id)
      return res.send(post);
    }

  });
})
router.get("/educatordata", function (req, res) {

  educator.find(function (err, post) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(post);
    }
  });
})

// router.post('/educatordata', function(req, res) {
//   educator.create(req.body, function (err, post) {
//       if(err){
//           console.log(err);
//         }
//         else {
//           console.log(post);
//           //res.json bhi likh sakte hai no problem
//         return  res.send(post);
//         }
//   });
// });




//********************************* now use async await  ********************************


//login
router.post('/signup', async function (req, res) {
const {name,email,password}=req.body;
User.findOne({email}).exec((err,user)=>{
  if(user){
    console.log("user already exist")
    return res.send({message:"user alreday exist"});
  }else{
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      if(err){
        return res.send({error:"something went wrong in hashing password"})
      }
      else{
        let newUser=new User({
          
          name:req.body.name,
          email:req.body.email,
          password:hash
        });
        newUser.save((err,success)=>{

          if(err){
            return res.send(err);
          }else{
            console.log(success)
            return res.send({message:"Signup Success"})
          }
              })
//console.log(hash);
      }
  });

    
  }
})

})

//signup
router.post('/login',async function (req, res) {
  // if( req.body.email==""){
  //   return res.send({error:"please fill email id"});
  // }

  let user=await User.find({ email: req.body.email })
    // .exec()
    ////.then(user => {
      if (user.length < 1) {
       return res.send({
        message: "user not found"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        console.log(result)
        if (err) {
          return  res.send({
            error: err
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              password: user[0].password
            },
            "sgdiudhwedh",
            {
                expiresIn: "20m"
            }
          );
          console.log(token)
          return res.send([{
            message: "Auth successful",
            token: token
          }]);
          
        }
        res.status(401).json({
          error:err
        });
      });
    })
    // .catch(err => {
    //   console.log(err);
    //   res.status(500).json({
    //     error: "error occured"
    //   });
    // });
//})

//sending email using nodemailer

// var transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'ftghj@gmail.com',
//     pass: 'asdfghjiuyghj'
//   }
// });

// var mailOptions = {
//   from: 'no-replay@prem.com',
//   to: 'premj4253@gmail.com',
//   subject: 'password reset',
//   html: `<p>you requested for passsword reset</p>
// <h5>click on this <a href="http://localhost:4200/update">link</a>to reset password</h5>`
// };

// transporter.sendMail(mailOptions, function(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
router.post('/adminlogin', async function (req, res) {

  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
       return res.send({
          message: "Auth failed1"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        console.log(result)
        if (err) {
          return  res.send({
            message: "Auth failed2"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              password: user[0].password,
              //role:user[0].role
            },
            "sgdiudhwedh",
            {
                expiresIn: "1h"
            }
          );
          //console.log(user)
          return res.send([{
            message: "Auth successful",
            token: token,
            user
          }]);
          
        }
        res.status(401).json({
          message: "Auth failed3"
        });
      });
    })


    // .catch(err => {
    //   console.log(err);
    //   res.status(500).json({
    //     error: err
    //   });
    // });
})

// var options = { method: 'POST',
//   url: 'https://dev-zh9gbzcl.us.auth0.com/oauth/token',
//   headers: { 'content-type': 'application/json' },
//   body: '{"client_id":"ithPwaU9sxlZeBJ14jOud4ot34OjMoxZ","client_secret":"DMXb6HfFNMgDmzm5ZjxhEAZs5EZ2Gtdqu3vBp9wiVbA_BlY2x1fT1V3do37wA1yT","audience":"http://localhost:3000/","grant_type":"client_credentials"}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

module.exports = router;