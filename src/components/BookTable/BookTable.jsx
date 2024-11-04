import React from "react";
import { FaSquare } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const BookTable = () => {
  return (
    <div className="book-table">
      <div className="max-w-7xl mx-auto pt-[120px] pb-[85px]">
        <div className="w-[635px] mb-10">
          <p className="text-[#BD1F17] flex items-center text-[20px] font-bold gap-1">
            <FaSquare />
            <span>Book Now</span>
          </p>
          <h1 className="text-[60px] text-white uppercase font-bold">
            Book Your Table
          </h1>
          <p className="text-[#F7F8F9] mb-10">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            <br />
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
        <div className="w-[635px] grid grid-cols-2 gap-7">
          <input
            className="bg-transparent border border-[#E5E7EB] py-3 px-4 placeholder:text-white text-white"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="bg-transparent border border-[#E5E7EB] py-3 px-4 placeholder:text-white text-white"
            type="email"
            placeholder="Your email"
          />
          <div className="relative">
            <input
              className="bg-transparent border border-[#E5E7EB] py-3 px-4 pr-10 placeholder:text-white text-white w-full"
              type="text"
              placeholder="Reservation date"
            />
            <SlCalender className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
          <div className="relative">
            <input
              className="bg-transparent border border-[#E5E7EB] py-3 px-4 pr-10 placeholder:text-white text-white w-full"
              type="number"
              placeholder="Total people"
            />
            <img
              src="/images/triangle.png"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
              alt="triangle icon"
            />
          </div>
        </div>
        <div className="w-[635px] mt-7">
          <textarea
            className="bg-transparent border border-[#E5E7EB] py-3 px-4 placeholder:text-white text-white w-full h-[140px] resize-none"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="mt-8">
            <button className="uppercase bg-[#FEBF00] px-6 py-[10px] font-bold">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
