// components/Banner.js

import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    // Adjust the height of the entire container based on screen size
    <div className="relative w-full h-[65vh] sm:h-screen">
      {/* Desktop Image */}
      <div className="hidden sm:block">
        <Image
          src="/images/bigBanner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
      </div>

      {/* Mobile Image */}
      <div className="block sm:hidden h-full relative">
        <Image
          src="/images/smallBanner.png"
          alt="Mobile Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide">
            JEMEL
          </h1>
          <p className="text-md md:text-lg mt-2">
            unveiling luxury like never before
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-all">
            VIEW PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
