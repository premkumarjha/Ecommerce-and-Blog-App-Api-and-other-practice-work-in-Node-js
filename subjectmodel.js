var mongoose = require('mongoose');
var subjectCourseSchema = new mongoose.Schema({
    subject: String,
      // marks: Number,
      trainer: String,
      startdate:String,
      enddate:String,
      status:String,
      actions:String
      //datepicker3:String,
      //datepicker4:String,
    });
  module.exports = mongoose.model('subject', subjectCourseSchema);