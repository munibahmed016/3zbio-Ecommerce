import React, { useState } from "react"
import { Link } from "react-router-dom"
import { links } from "./MyLinks"
import { 
  Home,
  ShoppingBag,
  Gift,
  Sparkles,
  Globe,
  Heart,
  Newspaper,
  Users,
  Briefcase,
  Phone,
  User,
  ChevronRight
} from 'lucide-react'

const getIconForLink = (name) => {
  const icons = {
    "Home": Home,
    "Categories": ShoppingBag,
    "Brands": Gift,
    "About Us": Users,
    "Gallery": Sparkles,
    "Shop All Products": ShoppingBag,
    "Contact Us": Phone,
  }
  return icons[name] || ShoppingBag
}

const NavLinks = ({ isMobile, onLinkClick }) => {
  const [activeMenu, setActiveMenu] = useState("")
  const [activeSubmenu, setActiveSubmenu] = useState("")

  const mobileMenuItems = [
    { name: "Home", link: "/" },
    ...links,
    { name: "Contact Us", link: "/contact" },
  ]

  const handleMenuClick = (name) => {
    setActiveMenu(activeMenu === name ? "" : name)
    setActiveSubmenu("")
  }

  const handleSubmenuClick = (head) => {
    setActiveSubmenu(activeSubmenu === head ? "" : head)
  }

  if (isMobile) {
    return (
      <div className="flex flex-col h-full bg-white">
        {mobileMenuItems.map((item) => (
          <div key={item.name} className="border-b border-gray-100">
            {item.submenu ? (
              <>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50"
                  onClick={() => handleMenuClick(item.name)}
                >
                  <div className="flex items-center gap-3">
                    {React.createElement(getIconForLink(item.name), {
                      className: "w-5 h-5 text-gray-400"
                    })}
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform duration-200 ${
                      activeMenu === item.name ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {activeMenu === item.name && (
                  <div className="bg-gray-50">
                    {item.sublinks.map((slinks) => (
                      <div key={slinks.Head}>
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 pl-8 text-sm text-gray-600 hover:bg-gray-100"
                          onClick={() => handleSubmenuClick(slinks.Head)}
                        >
                          {slinks.Head}
                          <ChevronRight 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeSubmenu === slinks.Head ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                        {activeSubmenu === slinks.Head && (
                          <div>
                            {slinks.sublink.map((slink) => (
                              <Link
                                key={slink.name}
                                to={slink.link}
                                className="flex items-center px-4 py-3 pl-16 text-sm text-gray-600 hover:bg-gray-100"
                                onClick={onLinkClick}
                              >
                                {slink.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.link}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
                onClick={onLinkClick}
              >
                {React.createElement(getIconForLink(item.name), {
                  className: "w-5 h-5 text-gray-400"
                })}
                <span>{item.name}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    )
  }

  // Desktop view remains unchanged
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-4 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                setActiveMenu(activeMenu !== link.name ? link.name : "")
                setActiveSubmenu("")
              }}
            >
              {link.name}
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-16 hidden group-hover:md:block hover:md:block z-[1]">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-1 gap-4">
                    {link.sublinks.map((mysublinks, subIndex) => (
                      <div key={subIndex}>
                        {mysublinks.sublink.map((slink, slinkIndex) => (
                          <li className="text-base text-black hover:text-teal-600 my-2" key={slinkIndex}>
                            <Link to={slink.link} className="hover:text-primary">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export default NavLinks