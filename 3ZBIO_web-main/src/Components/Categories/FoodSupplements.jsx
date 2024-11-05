'use client'

import { useState } from 'react'
import Progsterol from "../../assets/prog_mystery_box.png"
import ProgsterolPage from './progsterol'

export default function Component() {
  const [isZoomed, setIsZoomed] = useState(false)
  const [quantity, setQuantity] = useState('1')

  return (
  <>
 <ProgsterolPage/>
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Product Image with Zoom */}
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className={`transition-transform duration-300 ease-out ${isZoomed ? 'scale-150' : 'scale-100'}`}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={Progsterol}
                alt="Amazon Basics USB Condenser Microphone"
                className="w-full h-auto rounded-lg cursor-zoom-in"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">Roll over image to zoom in</p>
          </div>

          {/* Column 2: Product Details */}
          <div className="space-y-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-medium mt-2">
                ProGsterol Healthy Glucose Level With Deglusterol
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="ml-2 text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">
                  100 ratings
                </span>
              </div>
              <div className="text-sm text-gray-700">
                400+ bought in past month
              </div>
            </div>

            <div className="border-t border-b py-4">
              <table className="w-full">
                <tbody className="divide-y">
                <tr className="grid grid-cols-2 py-2">
                    <td className="text-sm text-gr">Brand</td>
                    <td className="text-sm">ProGsterol</td>
                  </tr>
                  <tr className="grid grid-cols-2 py-2">
                    <td className="text-sm ">Lower Cholesterol</td>
                    <td className="text-sm">Stabilize Glucose Levels</td>
                  </tr>
                  <tr className="grid grid-cols-2 py-2">
                    <td className="text-sm ">Decrease Triglycerides</td>
                    <td className="text-sm">Reverse Insuline Resistance</td>
                  </tr>
                  <tr className="grid grid-cols-2 py-2">
                    <td className="text-sm ">Improve Fatty Liver</td>
                    <td className="text-sm">Support Weight Loss</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <h2 className="font-bold text-lg">About this item</h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>
                ProGsterol's main ingredient Deglusterol is the world's first new dietary Ingredient (NDI) as a synthetic peptide approved by U.S FDA. 
                </li>
                {/* <li>
                  FOR STREAMING & MORE: 360° rotation adjustable stand mic is ideal for track your voice in real-time conference, online streaming, podcasting, music recording, solo vocals or instruments and more
                </li> */}
              </ul>
            </div>
          </div>

          {/* Column 3: Purchase Section */}
          <div className="bg-gray-50 p-6 rounded-lg space-y-6">
            <div className="space-y-2">
              <div className="flex items-baseline">
                <span className="text-sm">$</span>
                <span className="text-3xl font-medium">34</span>
                <span className="text-lg font-medium">64</span>
              </div>
              <div className="text-sm">
                <p className="text-gray-600">
                  + <span className="font-medium">$273.70</span> Shipping & Import Charges to Pakistan
                </p>
                <button className="text-blue-600 hover:text-blue-800 hover:underline">Details</button>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>
              <p className="text-sm text-gray-700 mt-1">
                Order within 6 hrs 31 mins
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="block w-24 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 sm:text-sm"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Add to Cart
              </button>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors">
                Buy Now
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Ships from</span>
                <span className="font-medium">3zbio.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sold by</span>
                <span className="font-medium">3zbio.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className="font-medium">Thursday, October 31</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">Add a gift receipt for easy returns</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}