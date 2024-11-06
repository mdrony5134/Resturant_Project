import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaSquare } from "react-icons/fa";
import PopularFoodCard from "./PopularFoodCard";

const PopularFoods = () => {
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4; 

  const nextSlide = () => {
    if (currentSlide < foodItems.length - slidesToShow) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-[#FBF7F2] py-[120px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between pb-[60px]">
        <div>
          <p className="text-[#BD1F17] flex items-center text-[20px] font-bold gap-1">
            <FaSquare />
            <span>Crispy, Every Bite Taste</span>
          </p>
          <h1 className="text-[62px] text-[#181818]">
            POPULAR FOOD ITEMS
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <div
            className="w-[60px] h-[60px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-md text-[20px] cursor-pointer"
            onClick={prevSlide}
          >
            <FaAngleLeft />
          </div>
          <div
            className="w-[60px] h-[60px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-md text-[20px] cursor-pointer"
            onClick={nextSlide}
          >
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
        >
          {foodItems.map((foodItem, index) => (
            <div className="flex-shrink-0 w-1/4 p-2" key={index}>
              <PopularFoodCard foodItem={foodItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularFoods;
