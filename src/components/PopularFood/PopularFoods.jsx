import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 

import { FaAngleLeft, FaAngleRight, FaSquare } from "react-icons/fa";
import PopularFoodCard from "./PopularFoodCard";

import { Autoplay } from "swiper/modules";

const PopularFoods = () => {

  // food items data
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

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <div className="bg-[#FBF7F2] py-8 md:py-16 lg:py-[120px]">
      <div className="max-w-7xl lg:mx-auto flex items-center justify-between pb-7 lg:pb-[60px] mx-5">
        <div>
          <p className="text-[#BD1F17] flex items-center text-[16px] lg:text-[20px] font-bold gap-1">
            <FaSquare />
            <span>Crispy, Every Bite Taste</span>
          </p>
          <h1 className="text-[40px] md:text-[62px] text-[#181818]">
            POPULAR FOOD ITEMS
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div
            onClick={handlePrev}
            className="w-[60px] h-[60px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-md text-[20px] cursor-pointer"
          >
            <FaAngleLeft />
          </div>
          <div
            onClick={handleNext}
            className="w-[60px] h-[60px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-md text-[20px] cursor-pointer"
          >
            <FaAngleRight />
          </div>
        </div>
      </div>

      <div className="max-w-7xl lg:mx-auto mx-5">
        <div>
          <img
            className="absolute left-0 w-[130px] lg:block hidden"
            src="/images/popular.png"
            alt="popular image"
          />
        </div>
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]} 
          autoplay={{delay: 2000, disableOnInteraction: false}}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {foodItems.map((foodItem, index) => (
            <SwiperSlide key={index}>
              <PopularFoodCard foodItem={foodItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom navigation buttons for mobile screens */}
      <div className="flex justify-center mt-8 gap-8 md:hidden">
        <div
          onClick={handlePrev}
          className="w-[50px] h-[50px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-md text-[20px] cursor-pointer"
        >
          <FaAngleLeft />
        </div>
        <div
          onClick={handleNext}
          className="w-[50px] h-[50px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-md text-[20px] cursor-pointer"
        >
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default PopularFoods;
