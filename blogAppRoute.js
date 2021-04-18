var express = require('express');
var blogAppRouter = express.Router();
var mongoose = require('mongoose');
var Subject = require('./subjectmodel');
var Blog = require('./blogModel');
var Contents = require('./manycontentsModel');
var Comments = require('./commentsModel');
const multer = require('multer');
var path = require('path');
const fs = require('fs');
const imageModel = require('./imageModel');

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

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
//       cb(null, true);
//   } else {
//       cb(null, false);
//   }
// }

const upload = multer({ storage: storage });
/* GET ALL Student */
blogAppRouter.get('/getsubject', function (req, res,) {

  Subject.find(function (err, post) {
    if (err) {
      console.log(err);
    }
    else {
      return res.json(post);
    }
  });
});

/* Post  Student */
blogAppRouter.post('/addsubject', function (req, res) {
  Subject.create(req.body, function (err, post) {
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

blogAppRouter.post('/postblog', function(req, res) {
  Contents.create(req.body, function (err, post) {
      if(err){
          console.log(err);
        }
        else {
          console.log(post);
          //res.json bhi likh sakte hai no problem
        return  res.send(post);
        }
  });
});

blogAppRouter.post('/authorlogin',async function (req, res) {

  console.log(req.body);
  
  let user=await Blog.find({ author: req.body.author });
  if (user.length < 1) {
    return res.send({
     message: "user not found"
     });
   }else if(user[0].password !== req.body.password){
    return res.send({
      message: "invalid password"
      });
   }else{
    return res.send({
      status: 200,
      user:user
      });
   }
});

blogAppRouter.post('/authorsignup', async function (req, res) {
//console.log(req.body)
try{
let author= await Blog.findOne({author:req.body.author});

  if(author){
    console.log(req.body)
    console.log("by this name user alreday exist, please use some other name")
    return res.send({message:"by this name user alreday exist, please use some other name"});
   }
   //else if(author.password !==req.body.password){
  //   console.log(req.body)
  //   return res.send({message:"invalid password"})
  // }
  else{
    console.log("ram")
    const blogs = new Blog(req.body);
   await blogs.save();
    return res.send(blogs)
  }
}catch(err){
return res.send(err);
}
});

blogAppRouter.post('/postcontent/:id', upload.single('images'), async function (req, res) {
  //upload.single('images'),
   try {
   console.log("path++++++++++++-------------------------------------------",req.file.path,req.body.title);
   
//read binary data

//https://stackoverflow.com/questions/3538021/why-do-we-use-base64#:~:text=Base64%20encoding%20schemes%20are%20commonly,intact%20without%20modification%20during%20transport.


// Base64 schemes represent binary data in an ASCII string format 
// (English alphabet, common punctuation chars, control chars)
//  by translating it into a base-64 representation. This basically 
//  means that all kind of characters (ASCII, UTF8, UTF16…)
//   with control characters can be mapped for example in English alphabet a-z, A-Z, 0-9 and 
//   you would be able to read them all on screen, or even print them out.
  var imagedata= await fs.readFileSync(req.file.path);
  //var imagedata= fs.readFileSync(req.file.path);
  // convert binary data to base64 encoded string
  var base64data=imagedata.toString('base64');
  var content=new Contents({
   
    img:
    { 
       // data: fs.readFileSync(req.file.path), 
       data:base64data ,
        contentType: 'image/png' 
    } ,
  name:req.body.name,
  published:req.body.published,
  title:req.body.title,
  contents:req.body.contents
  });
  
  //content.save();
    //   //getting author to whom content belongs to
      let user = await Blog.findById({ _id: new mongoose.Types.ObjectId(req.params.id)});
      //let cmt = await Comments.findById({ postComment: new mongoose.Types.ObjectId(req.params.id)});
     // console.log(cmt)
      //assign author to content
      const bloged = new Blog();
      content.Author = user;
      //content.comments=cmt;
      //add contents to author content field
      bloged.content.push(content);
  
      await content.save();
      await bloged.save();
      //await cmnt.save();
  
      //console.log(bloged)
      return res.send(bloged);

}
  catch (err) {
    return res.send(err);
  }

});



blogAppRouter.get('/getauthor', async function (req, res,) {

  ///getauthor/:id

  //let user=await Blog.find().populate('content');

  //below is to display content as per author
   //let user=await Contents.find({Author:new mongoose.Types.ObjectId(req.params.id)});

  //below is to display all author all content
  try{
    let user = await Contents.find();
    //let user = await Comments.find();
    console.log(user)
    return res.send(user);
  }catch(err){
    return res.sendStatus(400);
  }
  

});

//content by author id
blogAppRouter.get('/getauthor/:id', async function (req, res,) {

  ///getauthor/:id

  //let user=await Blog.find().populate('content');

  //below is to display content as per author
  try{
    let user=await Contents.find({Author:new mongoose.Types.ObjectId(req.params.id)});

    //below is to display all author all content
    //let user = await Contents.find();
    console.log(user)
    return res.send(user);
  }catch(err){
    return res.sendStatus(400);
  }
  

});

//delete the blog

blogAppRouter.delete('/delete/:id', async function (req, res) {

  Contents.findOneAndRemove({ _id: new mongoose.Types.ObjectId(req.params.id) }, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      return res.send(result);
    }

  })

})

//edit the blog
blogAppRouter.put('/edit/:id',async function(req,res){

  Contents.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(req.params.id)},req.body,function(err, output){
    if (err) {
      console.log(err)
    } else {
      console.log(output)
      return res.send(output);
    }
  })
})

//below is comments section
blogAppRouter.post('/postcomments/:id',async function(req, res) {
try{

  let post = await Contents.findById({ _id: new mongoose.Types.ObjectId(req.params.id)});
  console.log(req.body.comments)
Contents.update( { _id: new mongoose.Types.ObjectId(req.params.id) },
  { $push:{
    "comments" : [  
      {
"comment":req.body.comment,
"name":req.body.name,
"createdAt":req.body.createdAt,
      }
    ]
} },function(err,result){
    if(err){
      return res.send(err);
    }else{
      console.log(result)
      return res.send(result)
    }
  })
  
}catch(err){
  return res.send(err)
}
// Contents.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(req.params.id)},req.body,function(err, output){
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(output)
//     return res.send(output);
//   }
// })
});

//delete post

blogAppRouter.delete('/deletecomment/:id', async function (req, res) {
  
  await Contents.findByIdAndUpdate({_id: new mongoose.Types.ObjectId(req.params.id)}, {$pull: {"comments": {_id: new mongoose.Types.ObjectId(req.body._id)}}},
  function(err,result){
    if(err){
      console.log(req.body.id)
      return res.send(err);
    }else{
      console.log(result)
      return res.send(result)
    }
  })

})

//edit the comment
blogAppRouter.put('/editcomment/:id',async function(req,res){

//{ $set: { "comments.$.comment": req.body.comment,"comments.$.createdAt": req.body.createdAt }},function(err,result)
  console.log(req.body)
await Contents.update({_id: new mongoose.Types.ObjectId(req.params.id),comments:{$elemMatch:{_id:new mongoose.Types.ObjectId(req.body._id)}}},{ $set: { "comments.$.comment": req.body.comment ,"comments.$.createdAt": req.body.createdAt}},function(err,result){
  if(err){
    console.log(req.body.id)
    return res.send(err);
  }else{
    console.log(result)
    return res.send(result)
  }
})
})
// blogAppRouter.post('/postcontent/:id', upload.single('image'),async function(req,res){

//   try{
//     console.log("path++++++++++++-------------------------------------------",req.file.path,req.body.title);
//  //read binary data
//  var imagedata= await fs.readFileSync(req.file.path);
//  //var imagedata= fs.readFileSync(req.file.path);
//  // convert binary data to base64 encoded string
//  var base64data=imagedata.toString('base64');
 
//   var content=new imageModel({
//    img:
//    { 
//       // data: fs.readFileSync(req.file.path), 
//       data:base64data,
//        contentType: 'image/png' 
//    } ,
//    imagename:req.body.imagename,
//    priceBeforeDiscount:req.body.priceBeforeDiscount,
//    priceAfterDiscount:req.body.priceAfterDiscount,
//    date:req.body.date
//  //contents:req.body.contents
//  });
//  imageModel.create(content, function (err, post) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     //console.log(req.body.img)
//     console.log(post);
//     //res.json bhi likh sakte hai no problem
//     return res.send(post);
//   }
// });
//  //res.sen
 
//  //content.save();
//    //   //getting author to whom content belongs to

//    /// let user = await Blog.findById({ _id: new mongoose.Types.ObjectId(req.params.id)});//

//      //let cmt = await Comments.findById({ postComment: new mongoose.Types.ObjectId(req.params.id)});
//     // console.log(cmt)
//      //assign author to content

//     // const bloged = new Blog();
//     // content.Author = user;

//      //content.comments=cmt;
//      //add contents to author content field

//     // bloged.content.push(content);
 
//     // await content.save();
//     // await bloged.save();
//      //await cmnt.save();
 
//      //console.log(bloged)
//      //return res.send(bloged);
// }catch(err){
//   return res.send(err)
// }
   
 
//   })
module.exports = blogAppRouter;