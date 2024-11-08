// components/JemelReview.js
import Image from 'next/image';

const reviews = [
  {
    name: 'Kumkum',
    title: 'In love...!!!',
    content: 'Quality is good...Well finished jewelry. In love with this earrings.',
    rating: 5,
    image: '/images/review1.webp', // Replace with actual image names
  },
  {
    name: 'Srilina Basu Datta',
    title: 'Very Good Quality..!',
    content: 'Loved the quality of product. All the product of bagh e fiza collection is very bright and beautiful.',
    rating: 5,
    image: '/images/review2.webp',
  },
  {
    name: 'Dipa Paul',
    title: 'Awesome...',
    content: 'Very Beautiful Necklace. Love it!!!!!!',
    rating: 4,
    image: '/images/review3.webp',
  },
  {
    name: 'Seshadri',
    title: 'Woww..!',
    content: "Woww...fully satisfied with this earrings. Loved it looks exactly same as shown in the images and the main point is very light weight also it's packaging is good.",
    rating: 5,
    image: '/images/review4.webp',
  },
];

const JemelReview = () => {
  return (
    <div className="py-12 bg-[#fff]">
      <h2 className="text-center text-3xl font-semibold text-[#d98672]">CUSTOMER REVIEWS</h2>
      
      <div className="mt-8 px-6 max-w-6xl mx-auto overflow-x-auto">
        <div className="flex space-x-8 min-w-[300px] md:min-w-0 scrollbar-hide scroll-smooth">
          {reviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/4 p-6 rounded-lg shadow-lg bg-white text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src={review.image}
                  alt={`${review.name}'s review`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
              <p className="text-gray-600 mb-4">{review.content}</p>
              <div className="flex justify-center mt-2 mb-4">
                {Array(review.rating).fill().map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
                {review.rating < 5 && Array(5 - review.rating).fill().map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
              <p className="mt-2 font-medium text-gray-700">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JemelReview;
