
const ProductService = require("../Services/ProductService")


// add product
exports.AddProduct = async(req, res) => {
    try {
        const userInfo = req.body;
        // console.log(userInfo)
        const result = await ProductService.AddProductService(userInfo)
        // console.log(result)
        res.status(200).json({status:'success', data:result, message:"Product added successfully"})
    } catch (error) {
        res.status(400).json({status:'failed',message:"Do not added product"})
    }
  };
  
// get product
exports.GetProduct = async(req,res)=>{
    try {
        const result = await ProductService.GetProductService()
        // console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
  }

  // add my card product
// exports.AddMyCardProduct = async(req, res) => {
//     try {
//         const product = req.body;
//         const result = await ProductService.AddMyCardProductService(product)
//         console.log(result)
//         res.status(200).json({status:'success', data:result, message:"Product added successfully"})
//     } catch (error) {
//         res.status(400).json({status:'failed',message:"Do not added product"})
//     }
//   };