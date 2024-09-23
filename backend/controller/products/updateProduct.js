const uploadProductPermission = require("../../helpers/permission")
const productModel = require("../../models/productModels")

async function updateProductController(req,res){
    try {
        if(!uploadProductPermission(req.userId)){
            throw new Error ("Permission Denied")
        }
        const {_id, ...resBody} = req.body
        const updateProduct = await productModel.findByIdAndUpdate(_id, resBody)
        res.json({
            message : "Product Updated",
            success: true,
            error : false ,
            data : updateProduct
        })
    } catch (err) {
        res.status(400).json({
            message : err.message || err,
            success : false,
            error : true
        })
    }
}

module.exports = updateProductController