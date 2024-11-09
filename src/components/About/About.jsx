import { useState } from "react";
import DaynamicComponent from "./DaynamicComponent";

const About = () => {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div className="max-w-7xl lg:mx-auto pt-[30px] md:[60px] lg:pt-[120px] mx-5">
      <div className="flex gap-10 lg:gap-20 flex-col md:flex-col lg:flex-row">
        <img
          className="lg:h-[460px] h-full w-full"
          src="/images/aboutImage.png"
          alt="about image"
        />

        <div className="flex items-center justify-center absolute mt-7 ml-4 sm:mt-4 lg:mt-8 sm:ml-2 lg:ml-8">
          <div className="flex items-center space-x-4 bg-white p-4 rounded-[20px] shadow-md w-auto">
            <div className="relative flex items-center justify-center w-24 h-24 lg:w-28 lg:h-28">
              <svg className="w-full h-full absolute top-0 left-0">
                <circle
                  className="text-gray-300"
                  cx="50%"
                  cy="50%"
                  r="40"
                  strokeWidth="6"
                  fill="none"
                  stroke="currentColor"
                />
                <circle
                  className="text-[#FEBF00]"
                  cx="50%"
                  cy="50%"
                  r="40"
                  strokeWidth="6"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="301.2"
                  strokeDashoffset="90.62"
                  strokeLinecap="round"
                />

                <circle
                  cx="75"
                  cy="21"
                  r="6"
                  fill="white"
                  stroke="#FEBF00"
                  strokeWidth="2"
                />
              </svg>

              <div className="absolute font-semibold text-[20px] lg:text-[26px]">
                50+
              </div>
            </div>
            <div className="font-medium text-[#181818]">
              <p className="text-sm sm:text-xs lg:text-base">Market</p>
              <p className="text-sm sm:text-xs lg:text-base">Experiences</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-6 lg:gap-12 font-medium border-b border-[#B52B1D] lg:w-[629px] w-full">
            <button
              className={`${
                activeTab === "About"
                  ? "bg-[#B52B1D] text-white py-[6px] px-4"
                  : ""
              }`}
              onClick={() => setActiveTab("About")}
            >
              About
            </button>
            <button
              className={`${
                activeTab === "Experience"
                  ? "bg-[#B52B1D] text-white py-[6px] px-4"
                  : ""
              }`}
              onClick={() => setActiveTab("Experience")}
            >
              Experience
            </button>
            <button
              className={`${
                activeTab === "Contact"
                  ? "bg-[#B52B1D] text-white py-[6px] px-4"
                  : ""
              }`}
              onClick={() => setActiveTab("Contact")}
            >
              Contact
            </button>
          </div>
          {activeTab === "About" && (
            <DaynamicComponent
              heading="  Exceptional culinary experience and delicious food"
              title=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur
            adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            magna minim veniam nostrud exercitation."
              buttonText=" About more"
            />
          )}
          {activeTab === "Experience" && (
            <DaynamicComponent
              heading="Our Experience and delicious food"
              title=" With years of expertise in the culinary world, we bring flavors from
              around the globe, merging tradition with innovation to create
              unforgettable dining experiences.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur
            adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            magna minim veniam nostrud exercitation."
              buttonText="Experience People"
            />
          )}
          {activeTab === "Contact" && (
            <DaynamicComponent
              heading=" For inquiries and reservations, reach out to us"
              title=" With years of expertise in the culinary world, we bring flavors from
              around the globe, merging tradition with innovation to create
              unforgettable dining experiences.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur
            adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            magna minim veniam nostrud exercitation."
              buttonText="Contact Now"
            />
          )}
        </div>
      </div>
      <div className="lg:absolute lg:right-0 lg:-bottom-[1000px] hidden lg:block">
        <img
          className="lg:w-[200px] w-full"
          src="/images/aboutimg.png"
          alt="about image"
        />
      </div>
    </div>
  );
};

export default About;
