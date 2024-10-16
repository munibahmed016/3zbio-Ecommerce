const orderModel = require('../../models/orderProductModal');

const orderController = async (req, res) => {
    try {
        const currentUserId = req.userId;
        const orderList = await orderModel.find({ userId: currentUserId });

        res.json({
            data: orderList,
            success: true,
            error: false,
            message: "Order List",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            success: false,
            error: true,
        });
    }
};

module.exports = orderController;
