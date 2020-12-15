var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  
  //to avoid duplicate, still agar duplicate dega to error status 500 aayega, so we have to handle this eroror in UI;
    email:{unique:true,type:String},
    password:String,
    role:String,
    name:String,
    
    resetToken:String,
    });
  module.exports = mongoose.model('user', userSchema);