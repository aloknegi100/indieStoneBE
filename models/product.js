const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:String,
    image:[String],
    price:String,
    specification:Object,
    description:String,
    information:String
    
},{timestamps:true})

const Products = mongoose.model('Products',ProductSchema)
module.exports = Products