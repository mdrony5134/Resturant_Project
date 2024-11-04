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
    <div className="max-w-7xl mx-auto pt-[74px] pb-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {facilityData.map((facility) => (
          <div className="flex items-center gap-4">
            <div className="w-[90px] h-[90px] bg-[#FFFFFF] rounded-full shadow-xl flex items-center justify-center">
              <img src={facility.img} alt="" />
            </div>
            <div>
              <h2 className="text-[30px] text-[#0A1425] font-bold uppercase">
                {facility.heading}
              </h2>
              <p className="text-[20px] text-[#0A1425]">{facility.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facility;
