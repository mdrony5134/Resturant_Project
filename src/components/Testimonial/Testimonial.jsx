import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPlay, FaSquare } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    author: "Khalid Al Dawsry",
    location: "Jeddah, Saudi",
    image: "/images/men.png",
    thumbnail: "/images/videoimg.png",
  },
  {
    text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    author: "Fatima Al Mansoori",
    location: "Dubai, UAE",
    image: "/images/men.png",
    thumbnail: "/images/videoimg2.webp",
  },
  {
    text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    author: "Khalid Al Dawsry",
    location: "Jeddah, Saudi",
    image: "/images/men.png",
    thumbnail: "/images/food2.jpg",
  },
  {
    text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    author: "Fatima Al Mansoori",
    location: "Dubai, UAE",
    image: "/images/men.png",
    thumbnail: "/images/food3.jpg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-[120px] bg-[#FBF7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-[60px]">
          <div>
            <p className="text-[#BD1F17] flex items-center text-[20px] font-bold gap-1">
              <FaSquare />
              <span>Crispy, Every Bite Taste</span>
            </p>
            <h1 className="text-[62px] text-[#181818] uppercase">
              What Some of my Customers Say
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

        <div className="overflow-hidden">
          <div className="lg:absolute lg:left-0 lg:block hidden">
            <img
              className="w-[100px]"
              src="/images/testimonial.png"
              alt="testimonial image"
            />
          </div>
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map(
              ({ text, author, location, image, thumbnail }, index) => (
                <div key={index} className="flex-none w-full flex">
                  <div className="bg-[#FEBF00] w-[550px] p-20">
                    <p className="flex gap-2 text-[#0A1425] text-[20px]">
                      <span>
                        <RiDoubleQuotesL />
                      </span>
                      {text}
                    </p>
                    <div className="flex justify-between items-center pt-[160px] border-b border-[#0A1425] pb-4">
                      <div>
                        <h2 className="text-[18px]">{author}</h2>
                        <p className="text-[14px] text-[#333333]">{location}</p>
                      </div>
                      <div>
                        <img
                          className="w-10 h-10 rounded-full overflow-hidden"
                          src={image}
                          alt={`${author}'s image`}
                        />
                      </div>
                    </div>
                    <div className="border-b-4 border-[#BD1F17] w-10 relative bottom-1 left-[350px]"></div>
                  </div>
                  <div className="relative w-[760px] h-[555px] overflow-hidden">
                    <img
                      src={thumbnail}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#FFC900] rounded-full p-4">
                        <FaPlay className="text-black text-3xl" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
