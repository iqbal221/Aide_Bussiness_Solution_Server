const ProductService = require("../Services/ProductService");


// upload product
exports.UploadProduct = async (req, res,next) => {
    try {
        let result = await ProductService.uploadProductService(req.body);
        console.log(result)
        res.status(200).send({
            status: "success",
            message:"Product added successfully"
          });
        } catch (error) {
          next(error);
        }
};


exports.GetUploadProduct = async (req, res, next) => {
  try {
    let result = await ProductService.getUploadProductService();
    res.status(200).json({
      status: "success",
      message:"Product added successfully",
      data:result
    });
  } catch (error) {
    next(error);
  }
};