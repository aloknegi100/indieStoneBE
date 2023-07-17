const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:String,
    image:[String],
    price:String,
    type:String,
    tags:[String],
    description:String,
    
},{timestamps:true})

const Products = mongoose.model('Products',ProductSchema)
module.exports = Products