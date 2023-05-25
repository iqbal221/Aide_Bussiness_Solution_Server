const UserModel = require('../Model/UserModel')
const AddUserModel = require('../Model/AddUserModel')
const { ObjectId } = require('mongodb')

// create user
exports.CreateUserService = async(data) =>{
    const result = await UserModel.create(data)
    return result
}

// add user
exports.AddUserService = async(data) =>{
    const result = await AddUserModel.create(data)
    return result
}

// get user
exports.GetUserService = async() =>{
    const result = await AddUserModel.find()
    return result
}

// get user id
exports.GetUserByIdService = async(id)=>{
    const result = await AddUserModel.findOne({_id:id})
    return result
}

// delete user
exports.DeleteUserService = async(id) =>{
    const result = await AddUserModel.deleteOne({_id:id})
    return result
}

// update user
exports.UpdateUserService = async(id,data) =>{
    const result = await AddUserModel.updateOne({_id:id,$set:data})
    return result
}


