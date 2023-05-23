const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
    
    },
    Price:{
        type:String,
        required:true, 
    },
    Image:{
       type:String,
     
    },
    CreateDate:{
        type:Date,
        default:Date.now()
    }
},{versionKey:false})

const ProductModel = mongoose.model('Product',DataSchema)

module.exports = ProductModel;