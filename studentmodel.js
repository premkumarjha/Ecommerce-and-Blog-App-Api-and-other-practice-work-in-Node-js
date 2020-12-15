var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
  //id:String,
  trainingeventname: String,
    // marks: Number,
    trainingcenter: String,
    startdate:String,
    enddate:String,
    datepicker3:String,
    datepicker4:String,
    
  });

 

  module.exports = mongoose.model('tabledatas', studentSchema);