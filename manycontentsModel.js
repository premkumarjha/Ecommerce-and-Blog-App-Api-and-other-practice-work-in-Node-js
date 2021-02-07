var mongoose = require('mongoose');
var blog = require('./blogModel');
var schema=mongoose.Schema;
var contentSchema = new mongoose.Schema({
  
  //to avoid duplicate, still agar duplicate dega to error status 500 aayega, so we have to handle this eroror in UI;
    //authorid:{unique:true,type:String},
     //author:String,
    // content:String,
    name:String,
    image:String,
    published:{type: Date, default: Date.now},
    title:String,
    contents:String,
    likes:{type: Number, default: 0},
    dislike:{type: Number, default: 0},
    //author to whom ccontent will belong to
    Author:{
        type:schema.Types.ObjectId,
        ref:"blog"
    },
    
   // password:String
    
    });
  module.exports = mongoose.model('contentdata', contentSchema);