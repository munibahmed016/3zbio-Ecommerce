const stripe = require('../../config/stripe');
const addToCartModel = require('../../models/cartProduct');
const orderModel = require('../../models/orderProductModal');

const endpointSecret = "whsec_ee273d1c0d3fdbf77495db89f1c4c7478c061af8dbddb7cc77b011ee4018b288";

async function getLineItems(lineItems) {
    const productItems = [];

    if (lineItems?.data?.length) {
        for (const item of lineItems.data) {
            try {
                const product = await stripe.products.retrieve(item.price.product);
                const productData = {
                    productId: product.metadata.productId,
                    name: product.name,
                    price: item.price.unit_amount / 100,
                    quantity: item.quantity,
                    image: product.images
                };
                productItems.push(productData);
            } catch (error) {
                console.error(`Error retrieving product ${item.price.product}:`, error);
            }
        }
    }

    return productItems;
}

const webhooks = async (request, response) => {
    const sig = request.headers['stripe-signature'];
    const payloadString = JSON.stringify(request.body);
    let event;

    try {
        // Verify the webhook signature
        event = stripe.webhooks.constructEvent(payloadString, sig, endpointSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
        case 'checkout.session.completed':
            try {
                const session = event.data.object;

                // Retrieve line items from Stripe session
                const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
                const productDetails = await getLineItems(lineItems);

                // Prepare order details
                const orderDetails = {
                    productDetails,
                    email: session.customer_email,
                    userId: session.metadata.userId,
                    paymentDetails: {
                        paymentId: session.payment_intent,
                        payment_method_type: session.payment_method_types,
                        payment_status: session.payment_status
                    },
                    shipping_option: session.shipping_options?.map(s => ({
                        ...s,
                        shipping_amount: s.shipping_amount / 100
                    })) || [],
                    totalAmount: session.amount_total / 100
                };

                // Save the order in the database
                const order = new orderModel(orderDetails);
                const savedOrder = await order.save();

                console.log('Order saved successfully:', savedOrder);

                // If the order is saved, delete cart items for the user
                if (savedOrder && savedOrder._id) {
                    await addToCartModel.deleteMany({ userId: session.metadata.userId });
                    console.log('Cart items deleted successfully');
                }
            } catch (error) {
                console.error('Error processing order:', error);
                return response.status(500).send('Internal Server Error');
            }
            break;

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    response.status(200).send();
};

module.exports = webhooks;
