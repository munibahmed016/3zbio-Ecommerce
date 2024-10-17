const stripe = require('../../config/stripe');
const userModel = require('../../models/userModels');

const paymentController = async (request, response) => {
    try {
        const { cartItems } = request.body;
        console.log("cartItems", cartItems);

        const user = await userModel.findOne({ _id: request.userId });

        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                {
                    shipping_rate: 'shr_1Q0HmYBsawcQ7AZ8oFTAjwA1'
                }
            ],
            customer_email: user.email,
            metadata:{
                userId : request.userId
            },
            line_items: cartItems.map(item => {
                console.log("Processing item:", item);

        const { productName, productImage, _id: productId, sellingPrice } = item.productId;

        // Ensure these values are not empty
        if (!productName || !productImage || !sellingPrice) {
            throw new Error(`Invalid item data: productName: ${productName}, productImage: ${productImage}, sellingPrice: ${sellingPrice}`);
        }
                const images = Array.isArray(item.productId.productImage)
                    ? item.productId.productImage
                    : [item.productId.productImage];
                
                console.log("Product Image URL(s):", images);
                return {
                    price_data: {
                        currency: 'CAD',
                        product_data: {
                            name: item.productId.productName,
                            images: images, 
                            metadata: {
                                productId: item.productId._id
                            }
                        },
                        unit_amount: item.productId.sellingPrice * 100 
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1
                    },
                    quantity: item.quantity
                };
            }),
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`
        };

        const session = await stripe.checkout.sessions.create(params);
        response.status(303).json(session);
    } catch (err) {
        response.json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = paymentController;
