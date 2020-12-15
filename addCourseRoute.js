var express = require('express');
var addCourseRouter = express.Router();
var mongoose = require('mongoose');
var Subject = require('./subjectmodel');


/* GET ALL Student */
addCourseRouter.get('/getsubject', function(req, res, ) {

    Subject.find(function (err, post) {
        if(err){
            console.log(err);
          }
          else {
         return   res.json(post);
          }
    });
  });

/* Post  Student */
addCourseRouter.post('/addsubject', function(req, res) {
    Subject.create(req.body, function (err, post) {
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
  
module.exports = addCourseRouter;