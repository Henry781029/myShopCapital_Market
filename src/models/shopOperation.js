const mongoose = require('mongoose');
const {Schema} = mongoose;

const registerUser = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    country:{type: String, required: true},
    city:{type: String, required: true},
    password:{type: String, required: true},
    roul:{type: String, required: true},
    nameShop:{type: String, required: true}
});


module.exports = mongoose.model('user', registerUser);