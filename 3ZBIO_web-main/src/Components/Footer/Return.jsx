import React from 'react'
import Footer from '.'

const Return = () => {
  return (
    <>
    <div className="container mx-auto px-4 sm:px-24 py-8 text-gray-800">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-black">Refunds & Returns</h1>
      <p className="mb-6 text-start text-lg text-gray-500 font-medium">
      At 3zbio, customer satisfaction is our top priority. If you are not completely satisfied with your purchase, we are here to help.
      </p>
      <div className="space-y-6">
        {/* Section 1 */}
        <section>
          <h2 className="text-xl md:text-3xl text-black font-bold mb-4">Return Policy</h2>
          <ul className=" pl-5 space-y-4 text-lg text-gray-500 font-medium">
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Eligibility:</strong>
            Products must be unused, in their original packaging, and in the same condition as received. Returns must be initiated within 30 days of delivery.</p>
            </li>
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"><strong className='text-gray-600 text-xl'>Non-Returnable Items: </strong>
            Certain items such as opened testing kits or custom orders are not eligible for returns. Please check the product page for specific return information.</p>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl md:text-3xl text-black font-bold mb-4">Return Process</h2>
          <ul className=" pl-5 space-y-4 text-lg text-gray-500 font-medium">
          <li>
          <p className="mb-4 text-lg font-medium text-gray-500"><strong className='text-gray-600 text-xl'>Contact Us:</strong>
          Email our customer service team at{" "}
          <a href="mailto:returns@3zbio.com " className="text-blue-500 no-underline">
          returns@3zbio.com 
        </a>{" "}.
        to initiate a return. Provide your order number and the reason for return.
          </p>
          </li>
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Approval:</strong>
            Once your return request is approved, you will receive instructions on how to send your item back to us.</p>
            </li>
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Shipping:</strong>
            Pack the item securely and send it to the provided address. Customers are responsible for return shipping costs unless the return is due to a 3zbio error (e.g., wrong item sent).</p>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl md:text-3xl text-black font-bold mb-4">Refunds</h2>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Processing Time: </strong>
            Once we receive your return, we will inspect the item and notify you of the status of your refund. Refunds will be processed within 5-7 business days.</p>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"><strong className='text-gray-600 text-xl'>Original Payment Method:</strong>
            Refunds will be issued to the original payment method. Depending on your payment provider, it may take additional time for the refund to appear in your account.</p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Exchanges</h2>
          <p className="mb-4 text-lg font-medium text-gray-500">
          If you wish to exchange an item, please follow the return process and place a new order for the desired item.
          </p>
          <p className="mb-4 text-lg font-medium text-gray-500">
          For any questions or concerns, don’t hesitate to get in touch with our customer service team at 
          <a href="mailto:returns@3zbio.com " className="text-blue-500 no-underline">
          returns@3zbio.com 
        </a>{" "}.
          </p>
        </section>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Return
