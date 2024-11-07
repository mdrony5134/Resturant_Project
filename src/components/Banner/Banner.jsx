import React from "react";

const Banner = () => {
  return (
    <div className="max-w-7xl lg:mx-auto pt-[32px] lg:pt-[130px] pb-[20px] lg:pb-[160px] flex items-center flex-col lg:flex-row mx-5">
      <div className="flex flex-col items-center lg:items-start lg:w-1/2 w-full px-4 lg:px-0">
        <h1 className="text-[32px] md:text-[48px] lg:text-[120px] text-white lg:leading-[130px] leading-[1.2] uppercase lg:absolute lg:top-[300px] lg:w-[830px] w-full lg:text-left banner-header lg:z-50">
          Taste the authentic Saudi cuisine
        </h1>
        <div className="lg:mt-64 md:mt-32 w-full">
          <p className="text-[16px] md:text-[20px] lg:text-[24px] text-white mt-4 mb-5  lg:mt-8 lg:mb-9 lg:w-[559px] w-full">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="uppercase bg-[#FEBF00] px-6 py-2 md:py-[10px] font-bold">
            Explore Menu
          </button>
        </div>
      </div>

      <div className="relative lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0">
        <div className="absolute hidden lg:block -right-6 lg:-top-[25px]">
          <img src="/images/vector.png" alt="vector image" />
        </div>

        <img
          className="lg:w-[700px] w-full"
          src="/images/bannerImg.png"
          alt="banner image"
        />
        <div className="bg-[#FEBF00] lg:w-[120px] lg:h-[120px] w-[60px] h-[60px] rounded-full flex items-center justify-center absolute lg:left-[550px] lg:-bottom-[10px] left-[90%] -translate-x-1/2 lg:translate-x-0 lg:-translate-y-0 bottom-[0px]">
          <div className="border-2 border-dashed border-[#BD1F17] rounded-full lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] flex items-center justify-center">
            <h2 className="text-[#0A1425] lg:text-[36px] text-[18px] text-center lg:leading-[36px] leading-[18px] p-2">
              Today Offer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
