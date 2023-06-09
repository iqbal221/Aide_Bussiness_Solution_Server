const jwt = require("jsonwebtoken");
const UserService = require("../Services/UserService")
const UserModel = require('../Model/UserModel')


// create user
exports.CreateUser = async(req, res) => {
  try {
      const userInfo = req.body;
      // console.log(userInfo)
      const result = await UserService.CreateUserService(userInfo)
      // console.log(result)
      res.status(200).json({status:'success', data:result, message:"User Create successfully"})
  } catch (error) {
      res.status(400).json({status:'failed',message:"Do not create user"})
  }
};

// ---------------------- handle Login ----------------------
exports.LoginUser = async (req,res) => {
  const { Email, Password } = req.body;
  try {
    const user = await UserModel.findOne({ Email:Email, Password:Password });
    if(!user){
      return res.status(400).json({status:"failed",message:"Invalid email or password"})
    }

    // Generate Token
    const token = jwt.sign({ Email }, 'SecretKey123');

    // send token as response
    res.status(200).json({ status: "success", message: "Login successful", token:token });
  } catch (error) {
    console.error(`${error.message}`);
    res.status(400).json({ status: "failed", error: error.message });
  }
};

// add user
exports.AddUser = async(req, res) => {
  try {
      const userInfo = req.body;
      // console.log(userInfo)
      const result = await UserService.AddUserService(userInfo)
      // console.log(result)
      res.status(200).json({status:'success', data:result, message:"Add user successfully"})
  } catch (error) {
      res.status(400).json({status:'failed',message:"Do not added user"})
  }
};

// get all user
exports.GetUser = async(req,res)=>{
  try {
      const result = await UserService.GetUserService()
      // console.log(result)
      res.status(200).json({status:'success',data:result})
  } catch (error) {
      res.status(400).json({status:'failed',error:error.message})
  }
}

// get user by id
exports.GetUserById = async(req, res) => {
  try {
      const {id} = req.params;
      const user = await UserService.GetUserByIdService(id)
      // console.log(result)
      res.status(200).json({status:'success',data:user})
  } catch (err) {
      res.status(400).json({status:'failed',error:err.message})
  }
};

// delete add user
exports.DeleteUser = async(req,res)=>{
  try {
      const {id} = req.params;
      const result = await UserService.DeleteUserService(id)
      console.log(result)
      res.status(200).json({status:'success',data:result})
  } catch (error) {
      res.status(400).json({status:'failed',error:error.message})
  }
}

// update add user
exports.UpdateUser = async(req,res)=>{
  try {
      const {id} = req.params;
      const result = await UserService.UpdateUserService(id,req.body)
      console.log(result)
      res.status(200).json({status:'success',data:result})
  } catch (error) {
      res.status(400).json({status:'failed',error:error.message})
  }
}
