var mongoose = require('mongoose');
var ImageSchema = new mongoose.Schema({
    img: 
    { 
        data: String, 
        contentType: String 
    } ,
    //imagename:String //se find({ $text: { $search: req.body.a }}) ye query kamm nahi kar rahi thi, so i added text=true
    imagename:{ type: String, text: true },
    priceBeforeDiscount:{ type: String, text: true },
    priceAfterDiscount:String,
    date:String,

    
    });
  module.exports = mongoose.model('image', ImageSchema);