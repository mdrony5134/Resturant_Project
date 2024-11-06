import React from "react";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto pt-[130px] pb-[160px] flex items-center">
      <div className="">
        <h1 className="text-[120px] text-white leading-[130px] uppercase absolute top-[300px] banner-header">
          Taste the authentic <br /> Saudi cuisine
        </h1>
        <div className="mt-64">
          <p className="text-[24px] text-white mt-4 mb-9 w-[559px]">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="uppercase bg-[#FEBF00] px-6 py-[10px] font-bold">
            Explorer Menu
          </button>
        </div>
      </div>
      <div className="w-[700px]">
        <div className="relative left-[675px] top-[25px]">
          <img src="/images/vector.png" alt="vector image" />
        </div>
        <img
          className="w-full"
          src="/images/bannerImg.png"
          alt="banner image"
        />
        <div className="bg-[#FEBF00] w-[120px] h-[120px] rounded-full flex items-center justify-center relative left-[620px] bottom-[115px]">
          <div className="border-2 border-dashed border-[#BD1F17] rounded-full w-[100px] h-[100px] flex items-center justify-center">
            <h2 className="text-[#0A1425] text-[36px] text-center leading-[36px] p-2">
              Today Offer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
