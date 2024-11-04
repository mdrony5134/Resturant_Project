import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaSquare } from "react-icons/fa";
import PopularFoodCard from "./PopularFoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PopularFoods = () => {
 
  // popular food item data
  const foodItems = [
    {
      image: "/foodImage/burger.png",
      heading: "Vegetables Burger",
      title: "Barbecue Italian cuisine burger",
    },
    {
      image: "/foodImage/pizza.png",
      heading: "Special Pizza",
      title: "Barbecue Italian cuisine pizza",
    },
    {
      image: "/foodImage/frenchFry.png",
      heading: "Special French Fries",
      title: "Barbecue Italian cuisine",
    },
    {
      image: "/foodImage/chickenFry.png",
      heading: "Cuisine Chicken",
      title: "Japanese Cuisine Chicken",
    },
    {
      image: "/foodImage/burger.png",
      heading: "Vegetables Burger",
      title: "Barbecue Italian cuisine burger",
    },
    {
      image: "/foodImage/pizza.png",
      heading: "Special Pizza",
      title: "Barbecue Italian cuisine pizza",
    },
    {
      image: "/foodImage/frenchFry.png",
      heading: "Special French Fries",
      title: "Barbecue Italian cuisine",
    },
    {
      image: "/foodImage/chickenFry.png",
      heading: "Cuisine Chicken",
      title: "Japanese Cuisine Chicken",
    },
  ];

  return (
    <div className="bg-[#FBF7F2] py-[120px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between pb-[60px]">
        <div>
          <p className="text-[#BD1F17] flex items-center text-[20px] font-bold gap-1">
            <FaSquare />
            <span>Crispy, Every Bite Taste</span>
          </p>
          <h1 className="text-[50px] font-bold text-[#181818]">
            POPULAR FOOD ITEMS
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="w-[60px] h-[60px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-md text-[20px] cursor-pointer">
            <FaAngleLeft />
          </div>
          <div className="w-[60px] h-[60px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-md text-[20px] cursor-pointer">
            <FaAngleRight />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="max-w-7xl mx-auto"
      >
        {foodItems.map((foodItem, index) => (
          <SwiperSlide key={index}>
            <PopularFoodCard foodItem={foodItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularFoods;
