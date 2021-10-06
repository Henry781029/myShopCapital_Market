const mongoose = require('mongoose');
const {Schema} = mongoose;

const bcrypt = require('bcrypt');

const numEncrypter = 10;

const registerUser = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    country:{type: String, required: true},
    city:{type: String, required: true},
    password:{type: String, required: true},
    roul:{type: String, required: true},
    nameShop:{type: String, required: true}
});

registerUser.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document = this;
        bcrypt.hash(document.password, numEncrypter, (err, hashedPassword)=>{
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

registerUser.method.isCorrectPassword = function(userPassword, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}


module.exports = mongoose.model('user', registerUser);