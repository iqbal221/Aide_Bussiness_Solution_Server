const ProductModel = require('../Model/ProductModel')

// add upload product
exports.AddProductService = async(data) =>{
    const result = await ProductModel.create(data)
    return result
}

// get upload product
exports.GetProductService = async() =>{
    const result = await ProductModel.find()
    return result
}

// add cart product
exports.AddMyCardProductService = async(product) =>{
    const query = ProductModel.findOne({_id:product._id}).toArray()
    console.log(query)
    const result = await ProductModel.create(query)
    return result
}