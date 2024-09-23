import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaFacebookF,
  FaInstagram, FaYoutube, FaSearch, FaShoppingCart
} from 'react-icons/fa';
import { FaRegCircleUser } from "react-icons/fa6";
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../../store/userSlice';
import Context from '../../context';
import { GrSearch } from "react-icons/gr";
import ROLE from '../../common/role';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  const user = useSelector(state => state?.user?.user)
  console.log("user header", user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menuDisplay, setMenuDisplay] = useState(false)
  const context = useContext(Context)
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search, setSearch] = useState(searchQuery)



  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    })

    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if (data.error) {
      toast.error(data.message)
    }

  }
  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)

    if (value) {
      navigate(`/search?q=${value}`)
    } else {
      navigate("/search")
    }
  }


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="bg-[#022636]">
      {/* Top Bar for Mobile */}
      <div className="md:hidden bg-gradient-to-r from-[#022636] to-[#349E64] text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <a href="tel:+021 111-326-111" className="flex items-center space-x-1 hover:text-teal-400">
            <FaPhoneAlt />
            <span>(021)111-326-111</span>
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
            {/* User Icon */}
            <Link to="/profile">
              <FaRegCircleUser className="text-xl" />
            </Link>

            {/* Cart Button */}
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-xl" />
              <div className="bg-red-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">0</p>
              </div>
            </Link>

            {/* Login Button */}
            <Link to="/login" className="px-3 py-0 rounded-full text-center text-white bg-[#277F58] hover:bg-[#1e6554]">
              Login
            </Link>
          </div>

          {/* Center Logo */}
          <Link to="/" className="text-3xl font-bold text-center">
            <span className="text-teal-400">3</span><span className="text-green-400">Z</span>BIO
          </Link>

          {/* Right side for Mobile (Hamburger) */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl mt-2" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
            <NavLinks />
            <li><Link to="/news" className="hover:text-teal-400">News</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
            <li className="relative">
              <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='search product here...' className='w-full outline-none bg-transparent' onChange={handleSearch} value={search} />
                <div className='text-lg min-w-[50px] h-8 bg-teal-500 flex items-center justify-center rounded-r-full '>
                  <GrSearch />
                </div>
              </div>
            </li>

            {
              user?._id && (
                <Link to={"/cart"} className='text-2xl relative'>
                  <span><FaShoppingCart /></span>

                  <div className='bg-red-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                    <p className='text-sm'>{context?.cartProductCount}</p>
                  </div>
                </Link>
              )
            }
            <div className="flex items-center gap-7">
              <div className='relative flex justify-center'>
                {
                  user?._id && (
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
                  )
                }

                {menuDisplay && (
                  <div
                    className='absolute bg-white top-full right-0 w-48 h-fit p-2 shadow-lg rounded z-[1000] transform translate-y-2'
                    style={{ position: 'fixed', top: '50px' }}  // Adjust '50px' according to header height
                  >
                    <nav>
                      {user?.role === ROLE.ADMIN && (
                        <Link
                          to={"/admin-panel/all-products"}
                          className='whitespace-nowrap block text-black hover:bg-slate-100 p-2'>
                          Admin Panel
                        </Link>
                      )}
                      <Link
                        to={"/order"}
                        className='whitespace-nowrap block text-black hover:bg-slate-100 p-2'>
                        Order
                      </Link>
                    </nav>
                  </div>
                )}
              </div>

              <div>
                {
                  user?._id ? (
                    <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-[#349E64] hover:bg-[#1e6554]'>Logout</button>
                  )
                    : (
                      <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-[#349E64] hover:bg-[#1e6554]'>Login</Link>
                    )
                }

              </div>
            </div>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-[#071A2B] px-4 py-2">
            <li><Link to="/" className="block py-2 hover:text-teal-400">Home</Link></li>
            <NavLinks />
            <li><Link to="/news" className="block py-2 hover:text-teal-400">News</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-teal-400">Contact</Link></li>
            <li className="relative">
              <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                {/* <input type='text' placeholder='search product here...' className='w-full outline-none' onChange={handleSearch} value={search}/> */}
                <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                  <GrSearch />
                </div>
              </div>
              {isSearchOpen && (
                <form onSubmit={handleSearchSubmit} className="mt-2">
                  <input
                    type="text"
                    value={searchQuery}
                    // onChange={handleSearchChange}
                    className="bg-gray-800 text-white px-2 py-1 rounded-lg w-full focus:outline-none"
                    placeholder="Search..."
                  />
                </form>
              )}
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
