import React, { useState } from "react";
import Banner from "../Banner/Banner";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSidebarOpen);
  };

  return (
    <div className="py-8 header">
      <nav className="max-w-7xl lg:mx-auto flex items-center justify-between mx-5">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <span className="text-[28px] text-[#FFFFFF] font-semibold">
            Restaurant
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 ml-14">
          {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
            (link, index) => (
              <li key={index} className="list-none text-white font-medium">
                <a href="#">{link}</a>
              </li>
            )
          )}
        </div>

        <div className="hidden md:block">
          <button className="uppercase bg-[#FEBF00] px-6 py-[10px] font-bold">
            Book A Table
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-white"
          onClick={toggleSidebar}
          aria-controls="navbar-cta"
        >
          {isSidebarOpen ? (
            ""
          ) : (
            <RxHamburgerMenu className="text-white text-[30px]" />
          )}
        </button>
      </nav>

      {/* Sidebar for Mobile with Animation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-gray-300 bg-opacity-50 z-50">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 left-0 w-3/4 bg-gradient h-full p-5 flex flex-col gap-6"
            >
              {/* Close Icon inside the sidebar */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img src="/images/logo.png" alt="logo" />
                  <span className="text-[18px] text-[#FFFFFF] font-semibold">
                    Restaurant
                  </span>
                </div>
                <button
                  onClick={toggleSidebar}
                  className="text-white text-[25px]"
                >
                  <AiOutlineClose />
                </button>
              </div>

              {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
                (link, index) => (
                  <li
                    key={index}
                    className="list-none text-white font-medium text-lg"
                  >
                    <a href="#">{link}</a>
                  </li>
                )
              )}
              <button className="uppercase bg-[#FEBF00] px-6 py-3 font-bold mt-4">
                Book A Table
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Banner />
    </div>
  );
};

export default Header;
