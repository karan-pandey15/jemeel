// components/ImageSlider.js

import Image from "next/image";

const ImageSlider = () => {
  
    const items = [
        {
          id: 1,
          image: "/images/jemelproduct3.jpg",
          title: "18kt Gold Plated Stainless Steel Earrings",
          description: "Elegant and tarnish-free for daily wear",
          price: "₹6,800",
          oldPrice: "₹9,500",
        },
        {
          id: 2,
          image: "/images/jemelproduct4.jpg",
          title: "22kt Gold Plated Bracelet with Crystals",
          description: "Classic design with a modern touch",
          price: "₹8,200",
          oldPrice: "₹12,000",
        },
        {
          id: 3,
          image: "/images/jemelproduct2.webp",
          title: "Rose Gold Plated Necklace Set Rose Gold",
          description: "Perfect for evening occasions",
          price: "₹15,300",
          oldPrice: "₹18,500",
        },
        {
          id: 4,
          image: "/images/jemelproduct.jpg",
          title: "18kt Gold Plated Studded Ring Gold Plated ",
          description: "Stylish ring for everyday elegance",
          price: "₹4,500",
          oldPrice: "₹7,000",
        },
        {
          id: 5,
          image: "/images/jemelproduct3.jpg",
          title: "Kundan Crystal Pastel Earrings View Product by clicking",
          description: "Vibrant colors to match any outfit",
          price: "₹5,750",
          oldPrice: "₹9,200",
        },
      ];
      

  return (
    <div className="py-10 bg-white">
      <h2 className="text-center text-2xl font-semibold mb-6">WATCH AND SHOP</h2>
      <div className="flex overflow-x-auto space-x-4 px-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-60 sm:w-72 rounded-lg shadow-lg bg-white overflow-hidden"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={400}
                className="object-cover rounded-t-lg"
              />
              <div className="absolute bottom-2 left-2 bg-white p-2 rounded-md shadow-lg text-sm w-11/12">
                <p className="font-semibold">{item.title}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-lg font-semibold">{item.description}</p>
              <div className="flex items-center mt-2">
                <span className="text-xl font-semibold text-red-600">{item.price}</span>
                {item.oldPrice && (
                  <span className="text-sm text-gray-400 line-through ml-2">
                    {item.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
