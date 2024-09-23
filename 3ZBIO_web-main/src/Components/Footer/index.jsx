import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaCcDiscover
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 text-start">
        {/* Help Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">HERE TO HELP</h4>
          <ul className="space-y-3">
            <li><Link to="/OrderStatus" className="hover:text-teal-400 font-thin">Order Status</Link></li>
            <li><Link to="/Shipping&Delivery" className="hover:text-teal-400 font-thin">Shipping & Delivery</Link></li>
            <li><Link to="/Return&Refund" className="hover:text-teal-400 font-thin">Return Policy</Link></li>
            <li><Link to="/PaymentMethod" className="hover:text-teal-400 font-thin">Payment Methods</Link></li>
          </ul>
        </div>

        {/* Store Policies Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">STORE POLICIES</h4>
          <ul className="space-y-3">
            <li><a href="/DeliveryInformation" className="hover:text-teal-400 font-thin">Delivery Information</a></li>
            <li><a href="/Return" className="hover:text-teal-400 font-thin">Refunds & Returns</a></li>
            <li><a href="/careers" className="hover:text-teal-400 font-thin">Careers</a></li>
            <li><a href="/Privacy" className="hover:text-teal-400 font-thin">Our Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">NEWSLETTER</h4>
          <p className='text-sm'>Sign up and get 15% off your first order</p>
          <form className="flex flex-col mt-4 space-y-2 items-start">
            <input
              type="email"
              className="bg-gray-800 text-white p-2 w-full max-w-xs focus:outline-none text-start"
              placeholder="Enter your email..."
            />
            <button type="submit" className="bg-teal-600 text-white py-[2.5%] w-40 px-4 text-sm hover:bg-teal-500">
              SUBSCRIBE
            </button>
          </form>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF className="text-2xl text-white hover:text-blue-500 transition-colors duration-200" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
              <FaInstagram className="text-2xl text-white hover:text-purple-500 transition-colors duration-200" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <FaYoutube className="text-2xl text-white hover:text-red-500 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Payment Methods and Copyright Section */}
      <div className="container mx-auto mt-8 px-4 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-4">
        {/* Copyright Section */}
        <p className="text-center text-sm mb-4 md:mb-0">&copy; 2024 3Z Bio. All Rights Reserved.</p>

        {/* Payment Methods Section */}
        <div className="flex justify-center space-x-4">
          <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaCcVisa className="text-3xl bg-gray-700 text-white p-2 hover:bg-blue-600 rounded-lg transition-all duration-200" />
          </a>
          <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaCcMastercard className="text-3xl bg-gray-700 text-white p-2 hover:bg-red-600 rounded-lg transition-all duration-200" />
          </a>
          <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaCcPaypal className="text-3xl bg-gray-700 text-white p-2 hover:bg-blue-400 rounded-lg transition-all duration-200" />
          </a>
          <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaCcAmex className="text-3xl bg-gray-700 text-white p-2 hover:bg-blue-800 rounded-lg transition-all duration-200" />
          </a>
          <a href="https://www.discover.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaCcDiscover className="text-3xl bg-gray-700 text-white p-2 hover:bg-orange-600 rounded-lg transition-all duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
