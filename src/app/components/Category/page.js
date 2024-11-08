// components/Category.js

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import images
import cat1 from "../../../../public/images/img-1.png";
import cat2 from "../../../../public/images/img-2.png";
import cat3 from "../../../../public/images/img-3.png";
import cat4 from "../../../../public/images/img-5.png";

const Category = () => {
  return (
    <section className="bg-white py-10">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-black mb-8" style={{ fontFamily: "'Harmonia Sans', sans-serif" }}>
        Explore by Category
      </h1>

      {/* Scrollable container for categories */}
      <div className="flex justify-center overflow-x-auto scrollbar-hidden">
        <div className="flex gap-8 px-4 w-max h-48"> {/* Increase height here */}
          {/* Category Item - Earrings */}
          <div className="flex-shrink-0 flex flex-col items-center w-36 h-36 sm:w-48 sm:h-48">
            <Link href="#" className="text-decoration-none">
              <div className="w-full h-full rounded-full overflow-hidden cursor-pointer">
                <Image src={cat1} alt="Earrings" className="object-cover w-full h-full" />
              </div>
            </Link>
            <p className="mt-4 text-center text-black font-bold" style={{ fontFamily: "'Harmonia Sans', sans-serif" }}>Earrings</p>
          </div>

          {/* Category Item - Top Rings */}
          <div className="flex-shrink-0 flex flex-col items-center w-36 h-36 sm:w-48 sm:h-48">
            <Link href="#" className="text-decoration-none">
              <div className="w-full h-full rounded-full overflow-hidden cursor-pointer">
                <Image src={cat2} alt="Top Rings" className="object-cover w-full h-full" />
              </div>
            </Link>
            <p className="mt-4 text-center text-black font-bold" style={{ fontFamily: "'Harmonia Sans', sans-serif" }}>Top Rings</p>
          </div>

          {/* Category Item - Necklace */}
          <div className="flex-shrink-0 flex flex-col items-center w-36 h-36 sm:w-48 sm:h-48">
            <Link href="#" className="text-decoration-none">
              <div className="w-full h-full rounded-full overflow-hidden cursor-pointer">
                <Image src={cat3} alt="Necklace" className="object-cover w-full h-full" />
              </div>
            </Link>
            <p className="mt-4 text-center text-black font-bold" style={{ fontFamily: "'Harmonia Sans', sans-serif" }}>Necklace</p>
          </div>

          {/* Category Item - Bracelet */}
          <div className="flex-shrink-0 flex flex-col items-center w-36 h-36 sm:w-48 sm:h-48">
            <Link href="#" className="text-decoration-none">
              <div className="w-full h-full rounded-full overflow-hidden cursor-pointer">
                <Image src={cat4} alt="Bracelet" className="object-cover w-full h-full" />
              </div>
            </Link>
            <p className="mt-4 text-center text-black font-bold" style={{ fontFamily: "'Harmonia Sans', sans-serif" }}>Bracelet</p>
          </div>

          {/* Optional: Add more categories if needed */}
          <div className="flex-shrink-0 flex flex-col items-center w-36 h-36 sm:w-48 sm:h-48">
            <Link href="#" className="text-decoration-none">
              <div className="w-full h-full rounded-full overflow-hidden cursor-pointer">
                <Image src={cat1} alt="Earrings" className="object-cover w-full h-full" />
              </div>
            </Link>
            <p className="mt-4 text-center text-black font-bold" style={{ fontFamily: "'Harmonia Sans', sans-serif" }}>Earrings</p>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center w-36 h-36 sm:w-48 sm:h-48">
            <Link href="#" className="text-decoration-none">
              <div className="w-full h-full rounded-full overflow-hidden cursor-pointer">
                <Image src={cat2} alt="Necklace" className="object-cover w-full h-full" />
              </div>
            </Link>
            <p className="mt-4 text-center text-black font-bold" style={{ fontFamily: "'Harmonia Sans', sans-serif" }}>Necklace</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
