import React from 'react'
import Footer from '.'

const PaymentMethod = () => {
  return (
    <>
    <div className="container mx-auto px-4 sm:px-24 py-8 text-black">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Payment Methods</h1>
      <p className="text-start text-lg text-gray-500 font-medium">
      At 3zbio, we aim to provide a seamless and secure shopping experience by offering a variety of payment methods to suit your preferences. Please review the payment options available for your convenience.      </p>
      <div className="space-y-6">
        {/* Section 1 */}
        <section>
          <h2 className="text-xl md:text-3xl mt-4 font-bold mb-4">Accepted Payment Methods</h2>
          <p className='text-start text-lg text-gray-500 font-medium'>
            <li>We accept the following payment methods:</li>
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">1. Credit and Debit Cards</h2>
          <p className='text-start text-lg text-gray-500 font-medium'>
            <li>We accept major credit and debit cards, including:</li>
          </p>
          <ul className="list-decimal pl-10 space-y-2 font-medium text-gray-500 text-lg">
            <li>
              <strong className='text-gray-600'>Visa</strong></li>
            <li>
              <strong className='text-gray-600'>MasterCard </strong>
            </li>
            <li>
              <strong className='text-gray-600'>American Express</strong>
            </li>
            <li>
              <strong className='text-gray-600'>Discover</strong>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">2. PayPal</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          PayPal is a secure and widely accepted payment method. If you choose to pay with PayPal, you will be redirected to the PayPal website to complete your payment. You can use your PayPal account balance or link a credit or debit card to your PayPal account for payment.</p>
        </section>
        {/* Section 4 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">3. Apple Pay</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          For customers using Apple devices, we offer Apple Pay as a payment option. Apple Pay allows you to make secure payments using your iPhone, iPad, or Apple Watch. Simply select Apple Pay at checkout and authorize the payment using Face ID, Touch ID, or your device passcode.</p>
        </section>
        {/* Section 5 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">4. Bank Transfer</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          We also accept bank transfers for larger orders or corporate purchases. To pay via bank transfer, please contact our customer service team at{" "}
          <a href="mailto:support@3zbio.com" className="text-blue-500 no-underline">
                support@3zbio.com
              </a>.
              For banking details and instructions. Please note that your order will be processed once the payment is received and confirmed.
              </p>
        </section>
        {/* Section 6 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Payment Security</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          Your security is our top priority. We use industry-standard encryption and security measures to protect your payment information. All transactions are processed through secure payment gateways, and we do not store your payment details on our servers.</p>
        </section>
        {/* Section 7 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Billing Information</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          Please ensure that the billing information you provide during checkout matches the information on file with your payment provider. This includes your billing address, name, and contact details. Inaccurate billing information may result in a delay or cancellation of your order.</p>
        </section>
        {/* Section 8 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Payment Authorization</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          When you place an order, your payment method will be authorized for the total purchase amount. This means that the funds will be reserved but not charged until your order is processed and shipped. If the authorization fails, you will be notified, and you may need to use an alternative payment method.</p>
        </section>
        {/* Section 9 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Payment Confirmation</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          Once your payment is successfully processed, you will receive a payment confirmation email. This email will include your order details, payment amount, and transaction ID. Please keep this email for your records.</p>
        </section>

        {/* Section 10 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Declined Payments</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          If your payment is declined, please check the following:
          </p>
          <p className="mb-4 text-lg text-gray-500 font-medium">
            <li>Ensure that your card information, including the card number, expiration date, and CVV code, is entered correctly.</li>
          </p>
          <p className="mb-4 text-lg text-gray-500 font-medium">
            <li>Verify that your billing address matches the address on file with your payment provider.</li>
          </p>
          <p className="mb-4 text-lg text-gray-500 font-medium">
            <li>Check with your bank or payment provider to ensure that there are no restrictions or issues with your account.</li>
          </p>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          If you continue to experience issues with your payment, please contact our customer service team at{" "}
          <a href="mailto:support@3zbio.com" className="text-blue-500 no-underline">
          support@3zbio.com
        </a>{" "}
        for assistance.
          </p>
        </section>

        {/* Section 11 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Refunds</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          Refunds for returned items or canceled orders will be issued to the original payment method. Please allow 5-7 business days for the refund to appear in your account, depending on your payment provider. You will receive a refund confirmation email once the refund is processed.
          </p>
        </section>

        {/* Section 12 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Gift Cards</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          We offer 3zbio gift cards as a convenient payment option. Gift cards can be purchased on our website and used to pay for any order. To redeem a gift card, enter the gift card code during checkout. If the gift card balance is insufficient to cover the total purchase amount, you can pay the remaining balance using another payment method.
          </p>
        </section>

        {/* Section 13 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Payment Issues</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          If you encounter any issues with your payment, please contact our customer service team at {" "}
          <a href="mailto:support@3zbio.com" className="text-blue-500 no-underline">
          support@3zbio.com
        </a>{" "}.
        We are here to help and will work with you to resolve any payment-related problems.
          </p>
        </section>
        {/* Section 14 */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Payment Policy Updates</h2>
          <p className="mb-4 text-lg text-gray-500 font-medium">We may update our payment policy from time to time to reflect changes in our business practices or legal requirements. Please review this page regularly for the latest information on our accepted payment methods and policies.</p>
          <p className="mb-4 text-lg text-gray-500 font-medium">
          For any questions or concerns regarding our payment methods, don’t hesitate to get in touch with our customer service team at{"  "}
          <a href="mailto:support@3zbio.com" className="text-blue-500 no-underline">
          support@3zbio.com
        </a>{" "}.
        We are here to help and ensure that your experience with 3zbio is a positive one.
          </p>
        </section>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default PaymentMethod
