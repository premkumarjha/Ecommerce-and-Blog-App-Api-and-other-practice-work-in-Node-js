var mongoose = require('mongoose');
var educatorSchema = new mongoose.Schema({
  //id:String,
    firstname: String,
    lastname: String,
    email: String,
    dob: String,
    status: String,
    
  });

 

  module.exports = mongoose.model('educator', educatorSchema);