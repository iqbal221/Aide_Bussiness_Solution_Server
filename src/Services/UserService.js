const UserModel = require('../Model/UserModel')
const AddUserModel = require('../Model/AddUserModel')

// create user
exports.CreateUserService = async(data) =>{
    const result = await UserModel.create(data)
    return result
}

// find  user
exports.findUserByEmailService = async(Email)=>{
    const result = await UserModel.findOne({Email:Email})
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

// delete user
exports.DeleteUserService = async(id) =>{
    const result = await AddUserModel.deleteOne({_id:id})
    return result
}


