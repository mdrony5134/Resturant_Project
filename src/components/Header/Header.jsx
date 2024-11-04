import React from "react";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <div className="bg-gradient py-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="logo image" />
          <span className="text-[28px] text-[#FFFFFF] font-semibold">Resturant</span>

          <div className="flex items-center ml-14 gap-10">
            <li className="list-none text-white font-medium"><a href="#">Home</a></li>
            <li className="list-none text-white font-medium"><a href="#">About</a></li>
            <li className="list-none text-white font-medium"><a href="#">Portfolio</a></li>
            <li className="list-none text-white font-medium"><a href="#">Clients</a></li>
            <li className="list-none text-white font-medium"><a href="#">Blog</a></li>
            <li className="list-none text-white font-medium"><a href="#">Contact</a></li>
          </div> 
        </div>
        <div>
            <button className="uppercase bg-[#FEBF00] px-6 py-[10px] font-bold">Book A table</button>
        </div>
      </nav>
      <Banner/>
    </div>
  );
};

export default Header;
