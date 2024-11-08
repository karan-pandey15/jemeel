// // components/ProductCart.js

// import Image from "next/image";
// import Link from "next/link";

// const ProductCart = () => {
//   const items = [
    // { id: 1, image: "/images/1.jpg", heading: "Zirconia Studded Blue", price: "₹3000", description: "Elegant zirconia-studded blue ring" },
    // { id: 2, image: "/images/20.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹2000", description: "Classic gold-plated cubic zirconia" },
    // { id: 3, image: "/images/21.jpg", heading: "Studded Sapphire Blue", price: "₹5000", description: "Gorgeous studded sapphire blue necklace" },
    // { id: 4, image: "/images/25.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated ring with cubic zirconia" },
    // { id: 5, image: "/images/26.jpg", heading: "Zirconia Studded Blue", price: "₹3000", description: "Beautiful zirconia-studded blue ring" },
    // { id: 6, image: "/images/27.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹2000", description: "Gold-plated cubic zirconia earring" },
    // { id: 7, image: "/images/28.jpg", heading: "Studded Sapphire Blue", price: "₹5000", description: "Studded sapphire blue bracelet" },
    // { id: 8, image: "/images/29.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated, zirconia-studded jewelry" },
    // { id: 9, image: "/images/30.jpg", heading: "Studded Sapphire Blue", price: "₹5000", description: "Elegant studded sapphire blue jewelry" },
    // { id: 10, image: "/images/32.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated cubic zirconia piece" },

//   ];

//   return (
//     <div className="add_cart_container py-10 bg-white">
//       <div className="add_cart_inner_container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//         {items.map((item) => (
//           <Link href={`/components/product/${item.id}`} key={item.id} passHref>
//             <div className="add_cart_main_container flex flex-col items-center text-center p-4  rounded-lg">
//               <div className="add_cart_image mb-4">
//                 <Image src={item.image} alt={item.heading} width={180} height={180} className="object-cover rounded-full" />
//               </div>
//               <div className="add_cart_text">
//                 <p className="cart_heading text-lg font-bold mb-2" style={{ fontFamily: "'Harmonia Sans', sans-serif" }}>{item.heading}</p>
//                 <p className="cart_price text-md text-gray-700" style={{ fontFamily: "'Harmonia Sans', sans-serif" }}>{item.price}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCart;



import Image from "next/image";
import Link from "next/link";

const ProductCart = () => {
  const items = [
    { id: 1, image: "/images/1.jpg", heading: "Zirconia Studded Blue", price: "₹3000", description: "Elegant zirconia-studded blue ring" },
    { id: 2, image: "/images/7.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹2000", description: "Classic gold-plated cubic zirconia" },
    { id: 3, image: "/images/37.jpg", heading: "Studded Sapphire Blue", price: "₹5000", description: "Gorgeous studded sapphire blue necklace" },
    { id: 4, image: "/images/70.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated ring with cubic zirconia" },
    { id: 5, image: "/images/8.jpg", heading: "Zirconia Studded Blue", price: "₹3000", description: "Beautiful zirconia-studded blue ring" },
    { id: 6, image: "/images/10.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹2000", description: "Gold-plated cubic zirconia earring" },
    { id: 7, image: "/images/39.jpg", heading: "Studded Sapphire Blue", price: "₹5000", description: "Studded sapphire blue bracelet" },
    { id: 8, image: "/images/40.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated, zirconia-studded jewelry" },
    { id: 9, image: "/images/23.jpg", heading: "Studded Sapphire Blue", price: "₹5000", description: "Elegant studded sapphire blue jewelry" },
    { id: 10, image: "/images/25.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated cubic zirconia piece" },

  ];

  return (
    <div className="add_cart_container py-10 bg-white">
      <div className="add_cart_inner_container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
        {items.map((item) => (
          <Link href={`/components/product/${item.id}`} key={item.id} passHref>
            <div className="add_cart_main_container flex flex-col items-center text-center p-4 rounded-lg">
              <div className="add_cart_image mb-4">
                <Image src={item.image} alt={item.heading} width={180} height={180} className="object-cover rounded-md" />
              </div>
              <div className="add_cart_text">
                <p className="cart_heading text-md font-medium mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#B29D72" }}>
                  {item.heading}
                </p>
                <p className="cart_price text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#B29D72" }}>
                  {item.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
