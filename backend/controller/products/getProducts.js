const productModel = require("../../models/productModels")


const getProductController = async(req, res) =>{
    try {
        const allProduct = await productModel.find().sort({createdAt : -1})
        res.json({
            message : "All Products",
            success : true ,
            error : false ,
            data : allProduct
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            succsess : false,
            error : false
        })
    }
}

module.exports = getProductController