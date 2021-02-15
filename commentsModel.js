var mongoose = require('mongoose');
//var blog = require('./blogModel');
var schema=mongoose.Schema;
var commentsSchema = new mongoose.Schema({

  comment:{type: String},
  // postComment:
  //   {
  //   type:schema.Types.ObjectId,
  //   ref:"blog"
  // }

})
  module.exports = mongoose.model('commentsdata', commentsSchema);