import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      {/* Left */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 xl:bold-88">Wander often, wonder always</h1>
        <p className="regular-16 mt-6 text-gray-30 lg:max-w-[520px]">
          Embrace the spirit of exploration, let your curiosity roam freely, and
          marvel at the wonders around you. In the journey of discovery, find
          beauty in the unknown, and let the perpetual sense of wonder be your
          constant companion on the path of life.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            218K{" "}
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
