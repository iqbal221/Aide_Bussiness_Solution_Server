const UserController = require("../Controller/UserController");
const ProductController = require("../Controller/ProductController");

const express = require('express');
const { AuthVerifyToken } = require("../Middleware/AuthVerifyToken");
// const uploader = require("../Middleware/Uploader");
const router = express.Router();

// signup and login
router.post('/CreateUser', UserController.CreateUser);
router.post('/LoginUser', UserController.LoginUser);

// add user and get user
router.post('/AddUser', UserController.AddUser);
router.get('/GetUser', UserController.GetUser);
router.delete('/DeleteUser/:id', UserController.DeleteUser);
router.put('/UpdateUser/:id', UserController.UpdateUser);

// get user by id
router.get("/GetUserById/:id",  UserController.GetUserById)


// add product and get product
// router.post('/AddProduct', ProductController.AddProduct);
// router.get('/GetProduct', ProductController.GetProduct);
// router.post('/AddCardProduct',AuthVerifyToken, ProductController.AddMyCardProduct);

// image upload
router.post('/UploadProduct',ProductController.UploadProduct)
router.get('/GetUploadProduct',ProductController.GetUploadProduct)

// user Info
// router.get("/GetUserInfo", AuthVerifyToken,  UserController.GetUserInfo)


module.exports = router;