const orderModel = require('../../models/orderProductModal');

const orderController = async(request, response)=>{
    try {
        const currentUserId = request.userId

        const orderList = await orderModel.find({userId : currentUserId})

        response.json({
            data: orderList,
            success: true,
            error: false,
            message : "order List"
        })
    } catch (err) {
        response.status(500).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = orderController