"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar/page";
import ProductCart from "@/app/components/ProductCart/page";
import "./productpage.css"

const productData = [
  {
    id: "1",
    name: "Rubans Silver Plated Handcrafted Necklace Set",
    description: "Beautifully handcrafted necklace set perfect for occasions.",
    price: "₹3,000",
    images: ["/images/jemelimg5.jpg"]
  },
  {
    id: "2",
    name: "Rubans 22K Gold Plated Kundan Earring",
    description: "Elegant 22K gold plated earrings for a traditional look.",
    price: "₹2,000",
    images: ["/images/jemelimg6.jpg"]
  },
  {
    id: "3",
    name: "Rubans Radiant Gold Tone Bangle Set",
    description: "Gold tone bangles that bring a radiant look to any outfit.",
    price: "₹5,000",
    images: ["/images/jemelimg7.jpg"]
  },
  {
    id: "4",
    name: "Rubans Dual Toned Drop Earring",
    description: "Stylish dual-toned drop earrings for a modern look.",
    price: "₹3,000",
    images: ["/images/jemelimg8.jpg"]
  },
  {
    id: "5",
    name: "Rubans Silver Plated Handcrafted Necklace Set",
    description: "Beautifully handcrafted necklace set perfect for occasions.",
    price: "₹3,000",
    images: ["/images/jemelimg1.png"]
  },
  {
    id: "6",
    name: "Rubans 22K Gold Plated Kundan Earring",
    description: "Elegant 22K gold plated earrings for a traditional look.",
    price: "₹2,000",
    images: ["/images/1.jpg"]
  },
  {
    id: "7",
    name: "Rubans Radiant Gold Tone Bangle Set",
    description: "Gold tone bangles that bring a radiant look to any outfit.",
    price: "₹5,000",
    images: ["/images/jemelimg3.png"]
  },
  {
    id: "8",
    name: "Rubans Dual Toned Drop Earring",
    description: "Stylish dual-toned drop earrings for a modern look.",
    price: "₹3,000",
    images: ["/images/70.jpg"]
  }
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const selectedProduct = productData.find((p) => p.id === productId);

    if (selectedProduct) {
      const images = selectedProduct.images.length === 1 ? Array(3).fill(selectedProduct.images[0]) : selectedProduct.images;
      setProduct({ ...selectedProduct, images });
      setMainImage(images[0]);
    }
  }, [productId]);

  if (!product) return <div className="text-center p-10">Product not found</div>;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-4 flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex flex-col items-center">
          <Image
            src={mainImage}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
          <div className="flex gap-4 mt-4">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${product.name} - ${index + 1}`}
                width={100}
                height={100}
                className="cursor-pointer rounded-lg object-cover border border-gray-300 hover:border-black transition duration-300"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 productdetailscreen">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-2xl font-bold text-green-600">{product.price}</p>
          <button
            onClick={() => alert("Database not connected")}
            className="bg-black text-white py-3 px-6 rounded-full mt-4 hover:bg-gray-800 transition duration-300"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <ProductCart />
    </div>
  );
};

export default ProductDetailPage;
