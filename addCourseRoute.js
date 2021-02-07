var express = require('express');
var addCourseRouter = express.Router();
var mongoose = require('mongoose');
var Subject = require('./subjectmodel');
var Blog = require('./blogModel');
var Contents = require('./manycontentsModel');


/* GET ALL Student */
addCourseRouter.get('/getsubject', function (req, res,) {

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
addCourseRouter.post('/addsubject', function (req, res) {
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

addCourseRouter.post('/postblog', function(req, res) {
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

addCourseRouter.post('/authorlogin',async function (req, res) {

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

addCourseRouter.post('/authorsignup', async function (req, res) {
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

addCourseRouter.post('/postcontent/:id', async function (req, res) {
  try {

    const content = new Contents(req.body);
    //getting author to whom content belongs to
    let user = await Blog.findById({ _id: new mongoose.Types.ObjectId(req.params.id)});
    console.log(user)
    //assign author to content
    const bloged = new Blog();
    content.Author = user;
    await content.save();
    //add contents to author content field
    bloged.content.push(content);
    await bloged.save();
    return res.send(bloged);
  }
  catch (err) {
    return res.sendStatus(400);
  }

});


addCourseRouter.get('/getauthor', async function (req, res,) {

  ///getauthor/:id

  //let user=await Blog.find().populate('content');

  //below is to display content as per author
   //let user=await Contents.find({Author:new mongoose.Types.ObjectId(req.params.id)});

  //below is to display all author all content
  try{
    let user = await Contents.find();
    console.log(user)
    return res.send(user);
  }catch(err){
    return res.sendStatus(400);
  }
  

});

//content by author id
addCourseRouter.get('/getauthor/:id', async function (req, res,) {

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

addCourseRouter.delete('/delete/:id', async function (req, res) {

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
addCourseRouter.put('/edit/:id',async function(req,res){

  Contents.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(req.params.id)},req.body,function(err, output){
    if (err) {
      console.log(err)
    } else {
      console.log(output)
      return res.send(output);
    }
  })
})

module.exports = addCourseRouter;