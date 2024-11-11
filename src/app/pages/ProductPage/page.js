"use client";
import Navbar from "@/app/components/Navbar/page";
import Image from "next/image";
import Link from "next/link";

const ProductPage = () => {
  const items = [
    { id: 1, image: "/images/jemelimg5.jpg", name: "Rubans Silver Plated Handcrafted Necklace Set", price: "₹3,000", oldPrice: "₹7,000", discount: "57%" },
    { id: 2, image: "/images/jemelimg6.jpg", name: "Rubans 22K Gold Plated Kundan Earring", price: "₹2,000", oldPrice: "₹3,375", discount: "41%" },
    { id: 3, image: "/images/jemelimg7.jpg", name: "Rubans Radiant Gold Tone Bangle Set", price: "₹5,000", oldPrice: "₹7,000", discount: "29%" },
    { id: 4, image: "/images/jemelimg8.jpg", name: "Rubans Dual Toned Drop Earring", price: "₹3,000", oldPrice: "₹3,992", discount: "25%" },
    { id: 5, image: "/images/jemelimg1.png", name: "Rubans Silver Plated Handcrafted Necklace Set", price: "₹3,000", oldPrice: "₹7,000", discount: "57%" },
    { id: 6, image: "/images/1.jpg", name: "Rubans 22K Gold Plated Kundan Earring", price: "₹2,000", oldPrice: "₹3,375", discount: "41%" },
    { id: 7, image: "/images/jemelimg3.png", name: "Rubans Radiant Gold Tone Bangle Set", price: "₹5,000", oldPrice: "₹7,000", discount: "29%" },
    { id: 8, image: "/images/70.jpg", name: "Rubans Dual Toned Drop Earring", price: "₹3,000", oldPrice: "₹3,992", discount: "25%" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white py-10 px-6 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.id} href={`/pages/product/${item.id}`} passHref>
              <div className="p-4 border rounded-lg text-center relative bg-white flex flex-col justify-between h-full cursor-pointer" style={{ minHeight: "350px" }}>
                <div className="w-full h-[200px] md:h-[250px] mb-4 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={250}
                    height={250}
                    className="object-cover w-full h-full rounded-md"
                  />
                  <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                    Sale
                  </span>
                </div>
                <div className="text-sm font-medium flex-1">
                  <p className="text-red-600 font-semibold">{item.price}</p>
                  <p className="line-through text-gray-500 text-xs">{item.oldPrice}</p>
                  <p className="text-green-600 text-xs">Save {item.discount}</p>
                  <p className="mt-2 text-gray-800">{item.name}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Database not connected");
                  }}
                  className="bg-black text-white text-xs py-2 px-4 mt-4 rounded-full w-full"
                >
                  ADD TO CART
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
