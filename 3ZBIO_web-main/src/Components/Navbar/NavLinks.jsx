
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                setHeading(heading !== link.name ? link.name : "");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={heading === link.name ? "chevron-up" : "chevron-down"}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-1 gap-10">
                    {link.sublinks.map((mysublinks, subIndex) => (
                      <div key={subIndex}>
                        {mysublinks.sublink.map((slink, slinkIndex) => (
                          <li className="text-sm text-gray-600 my-2.5" key={slinkIndex}>
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
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks, subIndex) => (
              <div key={subIndex}>
                <div>
                  <h1
                    onClick={() =>
                      setSubHeading(subHeading !== slinks.Head ? slinks.Head : "")
                    }
                    className=" font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={subHeading === slinks.Head ? "chevron-up" : "chevron-down"}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                    {slinks.sublink.map((slink, slinkIndex) => (
                      <li className="py-3 pl-10" key={slinkIndex}>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
