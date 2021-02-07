var mongoose = require('mongoose');
var contentdata = require('./manycontentsModel');
var schema=mongoose.Schema;
var blogSchema = new mongoose.Schema({
  
  //to avoid duplicate, still agar duplicate dega to error status 500 aayega, so we have to handle this eroror in UI;
    //authorid:{unique:true,type:String},
    author:{type:String,unique:true,required : true},
    password:String,
    content:[
      {
        type:schema.Types.ObjectId,
        ref:"contentdata"
      }
    ],
    //name:String,
    // image:String,
    // published:String,
    // title:String,
    
    
    });
  module.exports = mongoose.model('blog', blogSchema);