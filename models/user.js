const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:String,
    password:String,
    type:String
},{timestamps:true})

const User = mongoose.model('User',UserSchema)
module.exports = User