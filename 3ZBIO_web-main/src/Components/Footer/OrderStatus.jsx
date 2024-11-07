import React from 'react';
import Footer from '.';

const OrderStatus = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-24 py-8 text-gray-800">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-black">Order Status</h1>
        <p className="mb-6 text-start text-lg text-gray-500 font-medium">
          At 3Z Bio, we understand how important it is for you to stay informed about your order status. Whether you're
          anxiously awaiting a special purchase or simply want to know when your package will arrive, we provide several
          ways to track your order and stay updated throughout the delivery process.
        </p>

        <div className="space-y-6">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-3xl text-black font-bold mb-4">How to Check Your Order Status</h2>
            <p className='mb-6 text-start text-lg text-gray-500 font-medium'>
              Once you place an order with us, you will receive a confirmation email containing your order details and a unique order number. This order number will be your key to tracking your order status. Here are the steps to check your order status:
            </p>
            <ul className=" pl-5 space-y-4 text-lg text-gray-500 font-medium">
              <li>
                <strong className='text-black text-2xl'>1. Order Confirmation Email</strong>
                <br /> Once you place an order with us, you'll receive an order confirmation email containing your order details and a unique order number. This is the best way to get started by locating your order details. Here are the steps to check your order status:
              </li>
              <li>
                <strong className='text-black text-2xl'>2. Visit Our Website</strong>
                <br /> You can check the status of your order by simply visiting the order status page on our website. Enter your order number and email to see the latest updates on your order.
              </li>
              <li>
                <strong className='text-black text-2xl'>3. Track Your Shipment</strong>
                <br /> Once your order is shipped, you'll receive a shipping confirmation email containing a tracking number and a link to the courier's website. Use this link to track your order and see the estimated delivery date.
              </li>
              <li>
                <strong className='text-black text-2xl'>4. Contact Customer Service</strong>
                <br /> If you have any questions or need help with your order status, please do not hesitate to contact our customer service department. Our team is always ready to assist you and guide you with the latest information about your order.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl text-black md:text-2xl font-bold mb-4">Understanding Order Status Updates</h2>
            <p className="mb-4 text-lg font-medium text-gray-500">
              As your order moves through the fulfillment process, its status will be updated to reflect its current stage. Here are some common order status updates you might see:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-500 font-medium">
              <li> <strong className='text-gray-600 font-bold'>Order Placed:</strong> Your order has been successfully placed and is being processed.</li>
              <li><strong className='text-gray-600 font-bold'>Order Confirmed:</strong> Your order has been confirmed and is being prepared.</li>
              <li><strong className='text-gray-600 font-bold'>Shipped:</strong> Your order has been shipped and is on its way to you.</li>
              <li><strong className='text-gray-600 font-bold'>Out for Delivery:</strong> Your order is out for delivery and will arrive soon.</li>
              <li><strong className='text-gray-600 font-bold'>Delivered:</strong> Your order has been delivered to your specified address.</li>
              <li><strong className='text-gray-600 font-bold'>Delayed:</strong> Your order has been delayed. Please contact customer service for more information.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Delayed Orders</h2>
            <p className="mb-4 text-lg font-medium text-gray-500">
              While we strive to meet our delivery estimates, there are times when unexpected delays can occur. We do our best to keep you informed about any delays and provide an updated estimated delivery date. If your order is delayed, we will notify you via email.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Order Status Notifications</h2>
            <p className="mb-4 text-lg font-medium text-gray-500">
              We offer various notifications to keep you informed at every stage of the order fulfillment process. These notifications include order confirmation, shipping updates, and delivery confirmations. You can also sign up for text notifications to receive updates directly on your mobile device.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-black  mb-4">Account Orders</h2>
            <p className="mb-4 text-lg font-medium text-gray-500">
              If you have an account with us, you can always check your order status by logging into your account on our website. Your order history, including current and past orders, will be available under the 'My Orders' section. This is the easiest way to stay informed about your purchases and track your orders.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default OrderStatus;
