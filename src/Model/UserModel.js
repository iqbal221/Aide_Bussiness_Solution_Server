const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true  
    },
    Password:{
       type:String,
       required:true,
     
    },
    CreateDate:{
        type:Date,
        default:Date.now()
    }
},{versionKey:false})

const UserModel = mongoose.model('User',DataSchema)

module.exports = UserModel;