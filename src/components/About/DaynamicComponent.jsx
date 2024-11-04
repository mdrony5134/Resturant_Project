import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const DaynamicComponent = ({ heading, title, buttonText }) => {
  return (
    <div>
      <h2 className="text-[35px] font-bold leading-[40px] font-babes uppercase h-[124px] pt-8">
        {heading}
      </h2>
      <p className="text-[#333333] pt-4 mb-8">{title}</p>
      <div className="flex items-center gap-8">
        <button className="uppercase bg-[#FEBF00] px-6 py-[10px] font-bold">
          {buttonText}
        </button>
        <p className="flex items-center gap-2">
          <FiPhoneCall className="text-[#BD1F17]" />{" "}
          <span className="text-[#0A1425] text-[18px] font-bold">
            +88 3426 739 485
          </span>
        </p>
      </div>
    </div>
  );
};

export default DaynamicComponent;
