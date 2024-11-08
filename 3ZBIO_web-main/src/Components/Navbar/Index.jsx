'use client'

import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaFacebookF,
  FaInstagram, FaYoutube, FaShoppingCart
} from 'react-icons/fa';
import { FaRegCircleUser } from "react-icons/fa6";
import { Search, X } from 'lucide-react';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../../store/userSlice';
import Context from '../../context';
import ROLE from '../../common/role';
import Logo from "../../assets/logo1.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);

  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const context = useContext(Context);
  const location = useLocation();

  // const trendingSearches = [
  //   "biotin plus",
  //   "dermazon",
  //   "butex",
  //   "calcium",
  //   "vitamax"
  // ];

  useEffect(() => {
    const searchProducts = async () => {
      if (searchQuery.length > 0) {
        try {
          const response = await fetch(`${SummaryApi.searchProduct.url,
            {method:SummaryApi.searchProduct.method}
          }?q=${searchQuery}`);
          const data = await response.json();
          setSearchResults(data.products || []);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    };

    const debounceTimer = setTimeout(searchProducts, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (query) => {
    if (query) {
      navigate(`/search?q=${query}`);
      setIsSearchOpen(false);
      setIsDesktopSearchOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDesktopSearch = () => {
    setIsDesktopSearchOpen(!isDesktopSearchOpen);
  };

  const SearchPopup = ({ isDesktop = false }) => (
    <div className={`fixed inset-0 z-50 flex items-start justify-center ${isDesktop ? 'pt-20' : ''}`}>
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Search</h2>
            <button 
              onClick={isDesktop ? toggleDesktopSearch : toggleSearch}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(searchQuery);
                }
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
              autoFocus
            />
            <button
              onClick={() => handleSearch(searchQuery)}
              className="absolute right-2 top-2 p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {searchResults.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">SEARCH RESULTS</h3>
              <div className="space-y-2">
                {searchResults.map((product) => (
                  <div 
                    key={product.id}
                    className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                    onClick={() => {
                      navigate(`/product/${product.id}`);
                      setIsSearchOpen(false);
                      setIsDesktopSearchOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-500">${product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">TRENDING NOW</h3>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => handleSearch(term)}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-[#022636]">
      {/* Top Bar for Mobile */}
      <div className="md:hidden bg-gradient-to-r from-[#022636] to-[#349E64] text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <a href="tel:+021 111-326-111" className="flex items-center space-x-1 hover:text-teal-400">
            <FaPhoneAlt />
            <span>021 111-326-111</span>
          </a>

          <div className="flex items-center space-x-3">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Top Bar for Desktop */}
      <div className="hidden md:flex bg-gradient-to-r from-[#022636] to-[#349E64] text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-2">
            <a href="tel:+9221111326111" className="flex items-center space-x-1 hover:text-teal-400">
              <FaPhoneAlt />
              <span>021 111-326-111</span>
            </a>
            <a href="mailto:contact@3zbio.pk" className="flex items-center space-x-1 hover:text-teal-400">
              <FaEnvelope />
              <span>contact@3zbio.pk</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-[#071A2B]">
        <div className="container mx-auto flex text-white justify-between items-center px-4 md:px-10 sm:py-0 py-3">
          {/* Left side for Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Cart Icon (only visible when user is logged in) */}
            {user?._id && (
              <Link to={"/cart"} className='text-2xl relative'>
                <span><FaShoppingCart /></span>
                <div className='bg-red-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                  <p className='text-sm'>{context?.cartProductCount}</p>
                </div>
              </Link>
            )}

            {/* Always visible User Icon */}
            <div className='relative flex justify-center'>
              <div
                className='text-3xl cursor-pointer relative flex justify-center'
                onClick={() => setMenuDisplay(prev => !prev)}
              >
                {/* Render profile picture if logged in, otherwise show user icon */}
                {user?._id && user?.profilePic ? (
                  <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>

              {/* Dropdown menu for logged in users */}
              {menuDisplay && (
                <div
                  className='absolute bg-white top-full right-0 w-48 h-fit p-2 shadow-lg rounded z-[1000] transform translate-y-2'
                  style={{ position: 'fixed', top: '50px' }}
                >
                  <nav>
                    {user?.role === ROLE.ADMIN && (
                      <Link to={"/admin-panel/all-products"} className='whitespace-nowrap block text-black hover:bg-slate-100 p-2'>
                        Admin Panel
                      </Link>
                    )}
                    <Link to={"/order"} className='whitespace-nowrap block text-black hover:bg-slate-100 p-2'>
                      Order
                    </Link>
                  </nav>
                  <div>
                    {user?._id ? (
                      <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-[#349E64] hover:bg-[#1e6554]'>Logout</button>
                    ) : (
                      <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-[#349E64] hover:bg-[#1e6554]'>Login</Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Logo */}
          <Link to="/" className="text-3xl font-bold text-center">
            <img src={Logo} alt="" className='w-36 h-12 md:w-44 md:h-14 pr-6 mr-6 md:mr-0 md:pr-10'/>
          </Link>

          {/* Right side for Mobile (Search and Hamburger) */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleSearch} className="text-white">
              <Search className="w-6 h-6" />
            </button>
            <button onClick={toggleMenu}>
              <FaBars className="text-xl mt-2" />
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
            <NavLinks />
            <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>

            {user?._id && (
              <Link to={"/cart"} className='text-2xl relative'>
                <span><FaShoppingCart /></span>
                <div className='bg-red-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                  <p className='text-sm'>{context?.cartProductCount}</p>
                </div>
              </Link>
            )}
            <div className="flex items-center gap-7">
              <div className='relative flex justify-center'>
                {user?._id && (
                  <div
                    className='text-3xl cursor-pointer relative flex justify-center'
                    onClick={() => setMenuDisplay(prev => !prev)}
                  >
                    {user?.profilePic ? (
                      <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                    ) : (
                      <FaRegCircleUser />
                    )}
                  </div>
                )}

                {menuDisplay && (
                  <div
                    className='absolute bg-white top-full right-0 w-48 h-fit p-2 shadow-lg rounded z-[1000] transform translate-y-2'
                    style={{ position: 'fixed', top: '50px' }}
                  >
                    <nav>
                      {user?.role === ROLE.ADMIN && (
                        <Link
                          to={"/admin-panel/all-products"}
                          className='whitespace-nowrap block text-black hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(prev => !prev)}>
                          Admin Panel
                        </Link>
                      )}
                      <Link
                        to={"/order"}
                        className='whitespace-nowrap block text-black hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(prev => !prev)}>
                        Order
                      </Link>
                    </nav>
                  </div>
                )}
              </div>

              <div>
                {user?._id ? (
                  <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-[#349E64] hover:bg-[#1e6554]'>Logout</button>
                ) : (
                  <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-[#349E64] hover:bg-[#1e6554]'>Login</Link>
                )}
              </div>
            </div>
            {/* Search icon for desktop */}
            <button 
              onClick={toggleDesktopSearch} 
              className="flex items-center gap-2 px-4 py-2 text-white hover:text-teal-400 transition-colors"
            >
              <Search className="w-5 h-5" />
              <span className="text-sm">Search</span>
            </button>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 left-0 w-[90%] sm:w-[400px] h-full bg-white transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <NavLinks isMobile={true} onLinkClick={toggleMenu} />
        </div>

        {/* Mobile Search Sidebar */}
        {isSearchOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSearch} />
            <div className="fixed top-0 right-0 w-[90%] sm:w-[400px] h-full bg-white z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out">
              <SearchPopup />
            </div>
          </>
        )}

        {/* Desktop Search Popup */}
        {isDesktopSearchOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleDesktopSearch} />
            <SearchPopup isDesktop={true} />
          </>
        )}

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;