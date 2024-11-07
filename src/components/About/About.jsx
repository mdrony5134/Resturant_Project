import { useState } from "react";
import DaynamicComponent from "./DaynamicComponent";

const About = () => {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div className="max-w-7xl lg:mx-auto pt-[30px] md:[60px] lg:pt-[120px] mx-5">
      <div className="flex gap-10 lg:gap-20 flex-col md:flex-col lg:flex-row">
        <img
          className="lg:h-[460px] h-full"
          src="/images/aboutImage.png"
          alt="about image"
        />
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
          <img className="lg:w-[200px] w-full" src="/images/aboutimg.png" alt="about image" />
        </div>
    </div>
  );
};

export default About;
