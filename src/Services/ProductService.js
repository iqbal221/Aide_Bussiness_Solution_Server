const ProductModel = require("../Model/ProductModel");

exports.uploadProductService = async (data) => {
    console.log(data)
    const {Name,Price,Image} = data
    let result = await ProductModel.create({Name:Name,Price:Price,Image:Image});
    return result
}

// Get all document
exports.getUploadProductService = async () => {
    let data = await ProductModel.find()
    return data
};