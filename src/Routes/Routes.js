const UserController = require("../Controller/UserController");
const ProductController = require("../Controller/ProductController");
// const UploadController = require("../Controller/UploadController");
const express = require('express');
const { AuthVerifyToken } = require("../Middleware/AuthVerifyToken");
// const uploader = require("../Middleware/Uploader");
const router = express.Router();

// signup and login
router.post('/CreateUser', UserController.CreateUser);
router.post('/LoginUser',AuthVerifyToken, UserController.LoginUser);

// add user and get user
router.post('/AddUser', UserController.AddUser);
router.get('/GetUser', UserController.GetUser);
router.delete('/DeleteUser/:id', UserController.DeleteUser);

// add product and get product
router.post('/AddProduct', ProductController.AddProduct);
router.get('/GetProduct', ProductController.GetProduct);
// router.post('/AddCardProduct',AuthVerifyToken, ProductController.AddMyCardProduct);

// image upload
// router.post('/upload_file',uploader.array("image"),UploadController.fileUpload)

// user Info
// router.get("/GetUserInfo", AuthVerifyToken,  UserController.GetUserInfo)


module.exports = router;