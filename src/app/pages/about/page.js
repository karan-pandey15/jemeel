import Navbar from "@/app/components/Navbar/page";
import React from "react";

export default function About() {
  return (
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#fff] px-4 py-8 mt-10">
      {/* Image Section */}
      <div className="md:w-1/3 w-full flex justify-center mb-6 md:mb-0">
        <img
          src="/images/jemelproduct3.jpg" // Replace with your image path
          alt="Jewelry"
          className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-2/3 w-full md:pl-12 text-center md:text-left space-y-4">
        <h2 className="text-2xl font-semibold">THE STORY OF JEMEL</h2>
        <p className="text-gray-800">
          Jemel is founded with the vision to redefine fine jewelry for the modern world. With a passion for minimalistic design, Jemel seeks to create timeless pieces that embody luxury, elegance, and simplicity. Every piece of jewelry is carefully crafted to enhance the beauty of the wearer while maintaining an understated yet luxurious appeal.
        </p>
        <p className="text-gray-800">
          Our collection is designed to cater to the needs of individuals who appreciate refined, everyday luxury. Whether it’s a simple necklace, a pair of elegant earrings, or a delicate bracelet, Jemel pieces are versatile, meaningful, and crafted with an attention to detail that makes them perfect for any occasion.
        </p>
        <p className="font-semibold text-gray-800">
          At Jemel, we believe in the beauty of subtlety, and our designs are a testament to that. Our goal is to offer you a piece of jewelry that feels personal, refined, and lasting, representing the essence of timeless beauty and luxury.
        </p>
      </div>
    </div>
    </>
  );
}
