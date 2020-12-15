var mongoose = require('mongoose');
var billingSchema = new mongoose.Schema({
  //id:String,
  firstname: String,
  lastname: String,
  email: String,
  mobile: String,
  firstaddress: String,
  secondaddress: String,
  state: String,
  city: String,
  zipcode: String,
  paymentmode: String,
    
  });

 

  module.exports = mongoose.model('billing', billingSchema);