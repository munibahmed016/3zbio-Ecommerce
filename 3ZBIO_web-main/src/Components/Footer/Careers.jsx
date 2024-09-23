import React from 'react'
import Footer from '.'

const Careers = () => {
  return (
    <>
    <div className="container mx-auto px-4 sm:px-24 py-8 text-gray-800">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-black">Careers at 3ZBIO</h1>
      <p className="mb-6 text-start text-lg text-gray-500 font-medium">
      Join Our Team at 3zbio! At 3zbio, we are dedicated to advancing medical diagnostics and improving health outcomes. We are always looking for passionate and talented individuals to join our team. Explore our career opportunities and become a part of our innovative and dynamic work environment.
      </p>
      <div className="space-y-6">
        {/* Section 1 */}
        <section>
          <h2 className="text-xl md:text-3xl text-black font-bold mb-4">Why Work at 3ZBIO?</h2>
          <ul className=" pl-5 space-y-4 text-lg text-gray-500 font-medium">
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Innovation:</strong>
            Be part of a company at the forefront of medical diagnostics technology.</p>
            </li>
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"><strong className='text-gray-600 text-xl'>Growth:</strong>
            We offer opportunities for professional development and career advancement.</p>
            </li>
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Culture:</strong>
            Join a collaborative and supportive team that values diversity and inclusion.</p>
            </li>
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"><strong className='text-gray-600 text-xl'>Impact:</strong>
            Contribute to products that make a difference in people’s lives.</p>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl md:text-3xl text-black font-bold mb-4">Current Openings</h2>
          <ul className=" pl-5 space-y-4 text-lg text-gray-500 font-medium">
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Sales and Marketing Manager:</strong>
            Develop and implement marketing strategies to drive sales growth.</p>
            </li>
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Product Development Engineer:</strong>
            Design and develop new medical diagnostic products.</p>
            </li>
            <li>
            <p className="mb-6 text-start text-lg text-gray-500 font-medium"> <strong className='text-gray-600 text-xl'>Customer Support Specialist:</strong>
            Provide exceptional support to our customers and resolve inquiries.</p>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">How to Apply</h2>
          <p className="mb-4 text-lg font-medium text-gray-500">
          If you are interested in any of our open positions, please send your resume and cover letter to{" "}
          <a href="mailto:careers@3zbio.com" className="text-blue-500 no-underline">
          careers@3zbio.com
        </a>{" "}.
        Be sure to include the position you are applying for in the subject line.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Internship Opportunities</h2>
          <p className="mb-4 text-lg font-medium text-gray-500">
          We also offer internship programs for students and recent graduates. Gain hands-on experience and learn from industry experts.
          </p>
          <p className="mb-4 text-lg font-medium text-gray-500">For more information on careers at 3zbio, please visit our Careers page or contact our HR department at {" "}
          <a href="mailto: hr@3zbio.com" className="text-blue-500 no-underline">
          hr@3zbio.com
        </a>{" "}.
          </p>
        </section>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Careers
