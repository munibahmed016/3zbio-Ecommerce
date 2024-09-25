import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import Footer from './Components/Footer';

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: 'include',
    });
    const dataApi = await dataResponse.json();
    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }
  };

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: 'include',
    });
    const dataApi = await dataResponse.json();
    setCartProductCount(dataApi?.data?.count);
  };

  useEffect(() => {
    /** Fetch user details and cart products count */
    fetchUserDetails();
    fetchUserAddToCart();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, // user detail fetch 
          cartProductCount, // current user add to cart product count,
          fetchUserAddToCart,
        }}
      >
        <ToastContainer position='top-center' />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer/>

        {/* Footer with chatbot toggle */}
        
          {/* Chatbot Button can also be here */}
          {/* <div className="footer-chatbot-button">
            <button className="chatbot-footer-button" onClick={() => setShowChatbot(!showChatbot)}>
              Chat With Doctor
            </button>
          </div> */}
        
      </Context.Provider>
    </>
  );
}

export default App;
