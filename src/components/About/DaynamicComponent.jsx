import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const DaynamicComponent = ({ heading, title, buttonText }) => {
  return (
    <div>
      <h2 className="text-[40px] lg:text-[62px] leading-[48px] lg:leading-[62px] font-babes uppercase lg:h-[124px] h-full pt-8">
        {heading}
      </h2>
      <p className="text-[#333333] mt-3 text-justify lg:mt-10 mb-8">{title}</p>
      <div className="flex items-center gap-4 lg:gap-8">
        <button className="uppercase text-nowrap bg-[#FEBF00] px-4 lg:px-6 py-[10px] font-bold">
          {buttonText}
        </button>
        <p className="flex items-center gap-2">
          <FiPhoneCall className="text-[#BD1F17]" />{" "}
          <span className="text-[#0A1425] text-[12px] lg:text-[18px] font-bold text-nowrap">
            +88 3426 739 485
          </span>
        </p>
      </div>
    </div>
  );
};

export default DaynamicComponent;
