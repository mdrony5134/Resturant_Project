import React from "react";

const Facility = () => {
  const facilityData = [
    {
      img: "/images/fast.png",
      heading: "Fast Delivery",
      title: "within 30 mins",
    },
    {
      img: "/images/dining.png",
      heading: "absolute dining",
      title: "Best buffet restaurant",
    },
    {
      img: "/images/bag.png",
      heading: "pickup delivery",
      title: "Grab your food order",
    },
  ];
  return (
    <div className="max-w-7xl lg:mx-auto lg:pt-[74px] pt-12 lg:pb-[120px] pb-10 mx-5">
      <div className="grid gap-9 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {facilityData.map((facility, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] bg-[#FFFFFF] rounded-full shadow-xl flex items-center justify-center">
              <img src={facility.img} alt="" />
            </div>
            <div>
              <h2 className="text-[24px] lg:text-[30px] text-[#0A1425] uppercase">
                {facility.heading}
              </h2>
              <p className="text-[18px] text-nowrap lg:text-[20px] text-[#0A1425]">{facility.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facility;
