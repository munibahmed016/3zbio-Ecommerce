import React from 'react'
import Footer from '.'

const DeliveryInformation = () => {
  return (
    <>
    <div className="container mx-auto px-4 sm:px-24 py-8 text-gray-800">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-black">Delivery Information</h1>
      <p className="mb-6 text-start text-lg text-gray-500 font-medium">
      Welcome to 3zbio! At 3zbio, we are committed to ensuring that your products reach you most efficiently and timely. Please review our delivery information below to understand our policies and processes.
      </p>
      <div className="space-y-6">
        {/* Section 1 */}
        <section>
          <h2 className="text-xl md:text-3xl text-black font-bold mb-4">Delivery Timeframes</h2>
          <ul className=" pl-5 space-y-4 text-lg text-gray-500 font-medium">
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Standard Shipping:</strong>
              Orders are typically processed within 1-2 business days and shipped within 5-7 business days.</p>
            </li>
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"><strong className='text-gray-600 text-xl'>Express Shipping:</strong>
              Orders are processed within 1 business day and shipped within 2-3 business days.</p>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl md:text-3xl text-black font-bold mb-4">Shipping Costs</h2>
          <ul className=" pl-5 space-y-4 text-lg text-gray-500 font-medium">
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Standard Shipping:</strong>
              Free for all orders over $50. A flat rate of $5 applies for orders below $50.</p>
            </li>
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Express Shipping:</strong>
             A flat rate of $15 applies for all orders.</p>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">International Shipping</h2>
          <p className="mb-4 text-lg font-medium text-gray-500">
          We offer international shipping to select countries. Delivery times and shipping costs will vary based on the destination. Customers are responsible for any customs duties or taxes applicable in their country.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Order Tracking</h2>
          <p className="mb-4 text-lg font-medium text-gray-500">
          Once your order is shipped, you will receive an email with your tracking information. You can track your order status on our website or via the carrier’s Website.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-black  mb-4">Missing or Delayed Orders</h2>
          <p className="mb-4 text-lg font-medium text-gray-500">
          If your order is delayed or you haven’t received your tracking information, please contact our customer service team at{" "}
          <a href="mailto:support@3zbio.com" className="text-blue-500 no-underline">
          support@3zbio.com
        </a>{" "}.
        We will investigate and provide you with the latest information on your order status.
          </p>
        </section>
        {/* Section 6 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Delivery Address</h2>
          <p className="mb-4 text-lg font-medium text-gray-500">
          Please ensure that your delivery address is accurate and complete. 3zbio is not responsible for orders delivered to incorrect or incomplete addresses provided by the customer.
          <p className="mb-4 text-lg font-medium text-gray-500">
          For further assistance, contact our customer service team at
        <a href="mailto:support@3zbio.com" className="text-blue-500 no-underline">
          support@3zbio.com
        </a>{" "}.
          </p>
          </p>
        </section>
      </div>
    </div>
  </>
  )
}

export default DeliveryInformation
