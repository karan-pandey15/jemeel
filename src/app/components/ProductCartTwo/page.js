 



// import Image from "next/image";
// import Link from "next/link";

// const ProductCartTwo = () => {
//   const items = [
//     { id: 1, image: "/images/1.jpg", heading: "Zirconia Studded Blue", price: "₹3000", description: "Elegant zirconia-studded blue ring" },
//     { id: 2, image: "/images/7.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹2000", description: "Classic gold-plated cubic zirconia" },
//     { id: 3, image: "/images/37.jpg", heading: "Studded Sapphire Blue", price: "₹5000", description: "Gorgeous studded sapphire blue necklace" },
//     { id: 4, image: "/images/70.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated ring with cubic zirconia" },
//     { id: 5, image: "/images/8.jpg", heading: "Zirconia Studded Blue", price: "₹3000", description: "Beautiful zirconia-studded blue ring" },
//     { id: 6, image: "/images/10.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹2000", description: "Gold-plated cubic zirconia earring" },
//     { id: 7, image: "/images/39.jpg", heading: "Studded Sapphire Blue", price: "₹5000", description: "Studded sapphire blue bracelet" },
//     { id: 8, image: "/images/40.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated, zirconia-studded jewelry" },
//     { id: 9, image: "/images/23.jpg", heading: "Studded Sapphire Blue", price: "₹5000", description: "Elegant studded sapphire blue jewelry" },
//     { id: 10, image: "/images/25.jpg", heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated cubic zirconia piece" },
//   ];

//   return (
//     <div className="add_cart_container py-10 bg-white">
//       <div className="add_cart_inner_container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
//         {items.map((item) => (
//           <Link href="/pages/ProductPage">
//             <div className="add_cart_main_container flex flex-col items-center text-center p-4 rounded-lg focus:outline-none">
//               <div className="add_cart_image mb-4">
//                 <Image src={item.image} alt={item.heading} width={180} height={180} className="object-cover rounded-md" />
//               </div>
//               <div className="add_cart_text">
//                 <p className="cart_heading text-xs font-medium mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#B29D72", letterSpacing: "0.5px" }}>
//                   {item.heading}
//                 </p>
//                 <p className="cart_price text-xs" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#000000", letterSpacing: "0.5px" }}>
//                   {item.price}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCartTwo;



import Image from "next/image";
import Link from "next/link";

const ProductCartTwo = () => {
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
          <Link href="/pages/ProductPage" key={item.id}>  {/* Add key prop here */}
            <div className="add_cart_main_container flex flex-col items-center text-center p-4 rounded-lg focus:outline-none">
              <div className="add_cart_image mb-4">
                <Image src={item.image} alt={item.heading} width={180} height={180} className="object-cover rounded-md" />
              </div>
              <div className="add_cart_text">
                <p className="cart_heading text-xs font-medium mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#B29D72", letterSpacing: "0.5px" }}>
                  {item.heading}
                </p>
                <p className="cart_price text-xs" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#000000", letterSpacing: "0.5px" }}>
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

export default ProductCartTwo;
