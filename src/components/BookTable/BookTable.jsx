import React, { useState } from "react";

import { FaSquare } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reservationDate: "",
    totalPeople: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBookNow = () => {
    const { name, email, reservationDate, totalPeople, message } = formData;
    if (name && email && reservationDate && totalPeople && message) {
      setIsModalOpen(true);
      setFormData({
        name: "",
        email: "",
        reservationDate: "",
        totalPeople: "",
        message: "",
      });
    } else {
      alert("Please fill in all fields!");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="book-table">
      <div className="max-w-7xl lg:mx-auto py-8 lg:pt-[120px] lg:pb-[85px] mx-5">
        <div className="lg:w-[635px] mb-10 w-full">
          <p className="text-[#BD1F17] flex items-center text-[16px] lg:text-[20px] font-bold gap-1">
            <FaSquare />
            <span>Book Now</span>
          </p>
          <h1 className="text-[40px] lg:text-[62px] text-white uppercase">
            Book Your Table
          </h1>
          <p className="text-[#F7F8F9] mb-10">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            <br />
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
        <div className="w-full lg:w-[635px] grid grid-cols-1 lg:grid-cols-2 gap-7">
          <input
            className="bg-transparent border border-[#E5E7EB] py-3 px-4 placeholder:text-white text-white focus:outline-none"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            className="bg-transparent border border-[#E5E7EB] py-3 px-4 placeholder:text-white text-white focus:outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
          <div className="relative">
            <input
              className="bg-transparent border border-[#E5E7EB] py-3 px-4 pr-10 placeholder:text-white text-white w-full focus:outline-none"
              type="text"
              name="reservationDate"
              value={formData.reservationDate}
              onChange={handleChange}
              placeholder="Reservation date"
            />
            <SlCalender className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
          <div className="relative">
            <input
              className="bg-transparent border border-[#E5E7EB] py-3 px-4 pr-10 placeholder:text-white text-white w-full focus:outline-none"
              type="text"
              name="totalPeople"
              value={formData.totalPeople}
              onChange={handleChange}
              placeholder="Total people"
            />
            <img
              src="/images/triangle.png"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
              alt="triangle icon"
            />
          </div>
        </div>
        <div className="w-full lg:w-[635px] mt-7">
          <textarea
            className="bg-transparent border border-[#E5E7EB] py-3 px-4 placeholder:text-white text-white w-full h-[140px] resize-none focus:outline-none"
            placeholder="Message"
            name="message"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
        </div>
        <div className="mt-8">
          <button
            onClick={handleBookNow}
            className="uppercase bg-[#FEBF00] px-6 py-[10px] font-bold"
          >
            Book Now
          </button>
        </div>

        {/* booking modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-sm w-full text-center mx-5 lg:mx-0">
              <h2 className="text-2xl bg-gradient bg-clip-text text-transparent">
                Congratulations!
              </h2>
              <p className="text-[30px]">🤝</p>
              <p>Your table has been successfully booked.</p>
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-[#FEBF00] text-white font-bold rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTable;
