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
import Logo from "../../assets/logo1.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

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

          {/* Right side for Mobile (Hamburger) */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <FaBars className="text-xl mt-2" />
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
            <NavLinks />
            <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
            <li className="relative">
              <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='search product here...' className='w-full outline-none bg-transparent' onChange={handleSearch} value={search} />
                <div className='text-lg min-w-[50px] h-8 bg-teal-500 flex items-center justify-center rounded-r-full '>
                  <GrSearch />
                </div>
              </div>
            </li>

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
                          className='whitespace-nowrap block text-black hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>
                          Admin Panel
                        </Link>
                      )}
                      <Link
                        to={"/order"}
                        className='whitespace-nowrap block text-black hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>
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
          </ul>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 left-0 w-64 h-full bg-[#071A2B] transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu}>
              <FaTimes className="text-xl text-white" />
            </button>
          </div>
          <ul className="px-4 py-2">
            <li><Link to="/" className="block py-2 text-white hover:text-teal-400" onClick={toggleMenu}>Home</Link></li>
            <NavLinks />
            <li><Link to="/news" className="block py-2 text-white hover:text-teal-400" onClick={toggleMenu}>News</Link></li>
            <li><Link to="/contact" className="block py-2 text-white hover:text-teal-400" onClick={toggleMenu}>Contact</Link></li>
            <li className="relative py-2">
              <div className='flex items-center w-full justify-between border rounded-full focus-within:shadow pl-2'>
                <input 
                  type='text' 
                  placeholder='Search products...' 
                  className='w-full px-2 py-1 bg-transparent text-white rounded-l-full outline-none' 
                  onChange={handleSearch} 
                  value={search}
                />
                <div className='text-lg min-w-[50px] h-8 bg-teal-500 flex items-center justify-center rounded-r-full'>
                  <GrSearch className="text-white" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;