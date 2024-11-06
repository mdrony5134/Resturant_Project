import React from "react";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto pt-[130px] pb-[160px] flex items-center">
      <div className="w-[746px]">
        <h1 className="text-[120px] text-white leading-[130px] uppercase absolute tracking-tight top-[250px] banner-header left-[250px]">
          Taste the authentic <br /> Saudi cuisine
        </h1>
       <div className="mt-64 ml-[120px]">
       <p className="text-[24px] text-white mt-4 mb-9 w-[559px]">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.{" "}
        </p>
        <button className="uppercase bg-[#FEBF00] px-6 py-[10px] font-bold">
          Explorer Menu
        </button>
       </div>
      </div>
      <div className="w-[700px]">
        <img
          className="w-full"
          src="/images/bannerImg.png"
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
