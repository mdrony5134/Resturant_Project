import React from "react";

const PopularFoodCard = ({ foodItem }) => {
  console.log(foodItem);
  return (
    <div>
      <div className="bg-[#FFFFFF] w-[305px] shadow-md py-8 rounded-md">
        <img
          className="bg-center w-[120px] h-[100px] mx-auto"
          src={foodItem.image}
          alt="food image"
        />
        <div className="border-t border-[4px] border-[#BD1F17] w-[52px] mx-auto my-6"></div>
        <div className="text-center">
          <h1 className="text-[#0A1425] text-[24px] uppercase mb-3">
            {foodItem.heading}
          </h1>
          <p className="text-[#0A1425]">{foodItem.title}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularFoodCard;
