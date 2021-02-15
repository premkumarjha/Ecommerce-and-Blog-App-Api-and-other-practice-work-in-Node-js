var mongoose = require('mongoose');
//var blog = require('./blogModel');
var schema=mongoose.Schema;
var contentSchema = new mongoose.Schema({
  
  //to avoid duplicate, still agar duplicate dega to error status 500 aayega, so we have to handle this eroror in UI;
    //authorid:{unique:true,type:String},
     //author:String,
    // content:String,
    name:String,
    img: 
    { 
        data: String || null,
        contentType: String 
    } ,
    published:{type: Date, default: Date.now},
    title:String,
    contents:String,
    likes:{type: Number, default: 0},
    dislike:{type: Number, default: 0},
    //comments:{type : Array , default : []},
    comments: [{ 
      comment: {type: String}, 
      name:{type: String},
      createdAt: {type: Date, default: Date.now},
      updatedAt: {type: Date, default: Date.now},
      authorimage: 
    { 
        data: String || null,
        contentType: String 
    } 

    }] ,
    //author to whom ccontent will belong to
    Author:{
        type:schema.Types.ObjectId,
        ref:"blog"
    },
    // comments:{
    //   type:schema.Types.ObjectId,
    //     ref:"commentsdata"
    // }
    
    
   // password:String
    
    });
  module.exports = mongoose.model('contentdata', contentSchema);