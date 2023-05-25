const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true, 
    },
    Role:{
       type:String,
       required:true,
     
    },
    Plan:{
        type:String,
        required:true,
     },
    Status:{
        type:String,
        required:true,
    },
    Image:{
        type:String,
        required:true,
    },
    CreateDate:{
        type:Date,
        default:Date.now()
    }
},{versionKey:false})

const AddUserModel = mongoose.model('AddUser',DataSchema)

module.exports = AddUserModel;