const mongoose=require('mongoose');
const schema=mongoose.schema;
const bcrypt=require('bcrypt');

var passportLoginSchema = new mongoose.Schema({
    //id:String,
    email:String,
    password:String
      
    });
    passportLoginSchema.pre('save',function(next){

        var user=this;
        console.log(user);
        bcrypt.hash(user.password,10,function(err,hash){

            if(err){
                return next(err)
            }
            user.password=hash;
            next();
        })
    })
    
    passportLoginSchema.methods.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    }

    module.exports = mongoose.model('passportUser', passportLoginSchema);