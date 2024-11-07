import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaRegClock,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer lg:py-[120px] py-8">
      <div className="max-w-7xl lg:mx-auto mx-5">
        <h2 className="text-[40px] lg:text-[62px] text-white text-center mb-12">
          We’re ready to offer you the best dining experience
        </h2>

        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="w-full lg:w-[312px] text-center">
            <FaRegClock className="text-[#FEBF00] w-[30px] mx-auto  text-[30px] font-bold" />
            <h2 className="text-[24px]  mt-6 mb-3 uppercase">
              Opening Hours
            </h2>
            <p>Monday - Sunday</p>
            <p>9:00 AM to 11:30 PM</p>
          </div>

          <div className="w-full lg:w-[312px] text-center">
            <MdOutlinePhoneInTalk className="text-[#FEBF00] w-[30px] mx-auto text-[30px] font-bold" />
            <h2 className="text-[24px]  mt-6 mb-3 uppercase">
              Let's Talk
            </h2>
            <p>Phone: +123 456 7890</p>
            <p>Fax: +987 654 3210</p>
          </div>

          <div className="w-full lg:w-[312px] text-center">
            <MdOutlineEmail className="text-[#FEBF00] w-[30px] mx-auto text-[30px] font-bold" />
            <h2 className="text-[24px]  mt-6 mb-3 uppercase">
              Book A Table
            </h2>
            <p>Email: info@demo.com</p>
            <p>Support: support@demo.com</p>
          </div>

          <div className="w-full lg:w-[312px] text-center">
            <CiLocationOn className="text-[#FEBF00] w-[30px] mx-auto text-[30px] font-bold" />
            <h2 className="text-[24px]  mt-6 mb-3 uppercase">
              Our Address
            </h2>
            <p> 123 Stree New York City ,</p>
            <p> United States Of America.</p>
          </div>
        </div>

        <div className="grid grid-cols-4  lg:gap-6 w-full lg:w-[285px] lg:mx-auto mx-4 mt-28">
          <div className="w-[36px] h-[36px] lg:w-[53px] lg:h-[53px] border border-[#E5E7EB] rounded-full flex items-center justify-center">
            <FaFacebook className="text-white text-[20px]" />
          </div>
          <div className="w-[36px] h-[36px] lg:w-[53px] lg:h-[53px] border border-[#E5E7EB] rounded-full flex items-center justify-center">
            <FaSquareXTwitter className="text-white text-[20px]" />
          </div>
          <div className="w-[36px] h-[36px] lg:w-[53px] lg:h-[53px] border border-[#E5E7EB] rounded-full flex items-center justify-center">
            <FaInstagramSquare className="text-white text-[20px]" />
          </div>
          <div className="w-[36px] h-[36px] lg:w-[53px] lg:h-[53px] border border-[#E5E7EB] rounded-full flex items-center justify-center">
            <FaLinkedin className="text-white text-[20px]" />
          </div>
        </div>
        <div>
          <p className="text-white text-[16px] lg:text-[21px] text-center mt-6">© 2023 <span className="text-[#FEBF00] font-medium">Niomax</span> All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
