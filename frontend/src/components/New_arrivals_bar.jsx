// import React, { useState } from 'react';
// import { HeartIcon } from '@heroicons/react/24/outline';

// export default function NewArrivals() {
//   const newArrivals = [
//     {
//       id: 1,
//       name: 'New Product 1',
//       image: 'https://via.placeholder.com/200',
//       realPrice: '$299',
//       discountedPrice: '$249',
//     },
//     {
//       id: 2,
//       name: 'New Product 2',
//       image: 'https://via.placeholder.com/200',
//       realPrice: '$399',
//       discountedPrice: '$349',
//     },
//     {
//       id: 3,
//       name: 'New Product 3',
//       image: 'https://via.placeholder.com/200',
//       realPrice: '$499',
//       discountedPrice: '$459',
//     },
//     {
//       id: 4,
//       name: 'New Product 4',
//       image: 'https://via.placeholder.com/200',
//       realPrice: '$199',
//       discountedPrice: '$179',
//     },
//     {
//       id: 5,
//       name: 'New Product 5',
//       image: 'https://via.placeholder.com/200',
//       realPrice: '$159',
//       discountedPrice: '$129',
//     },
//     {
//       id: 6,
//       name: 'New Product 6',
//       image: 'https://via.placeholder.com/200',
//       realPrice: '$249',
//       discountedPrice: '$199',
//     },
//     {
//       id: 7,
//       name: 'New Product 7',
//       image: 'https://via.placeholder.com/200',
//       realPrice: '$349',
//       discountedPrice: '$299',
//     },
//     {
//       id: 8,
//       name: 'New Product 8',
//       image: 'https://via.placeholder.com/200',
//       realPrice: '$449',
//       discountedPrice: '$399',
//     },
//   ];

//   const [wishlist, setWishlist] = useState({});
//   const [buyNowClicked, setBuyNowClicked] = useState({});

//   const handleWishlistToggle = (id) => {
//     setWishlist((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleBuyNowClick = (id) => {
//     setBuyNowClicked((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   return (
//     <div className="bg-[#212121] py-8 px-4">
//       <h2 className="text-2xl font-semibold text-white mb-4 text-center">🆕 New Arrivals</h2>
//       <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4">
//         {newArrivals.map((product) => (
//           <div
//             key={product.id}
//             className={`min-w-[200px] bg-white border border-gray-200 rounded-xl shadow-sm p-4 relative transform transition-transform duration-300 ${
//               wishlist[product.id] ? 'border-red-400' : ''
//             } hover:scale-105`}
//           >
//             {/* Wishlist Icon */}
//             <button
//               onClick={() => handleWishlistToggle(product.id)}
//               className={`absolute top-2 right-2 ${
//                 wishlist[product.id] ? 'text-red-500' : 'text-gray-500'
//               }`}
//             >
//               <HeartIcon className="h-6 w-6" />
//             </button>

//             {/* Product Image */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-32 object-cover rounded-md"
//             />

//             {/* Product Details */}
//             <h3 className="mt-3 text-lg font-medium text-black">{product.name}</h3>
//             <div className="mt-1 flex items-center space-x-2">
//               <span className="text-gray-500 line-through">{product.realPrice}</span>
//               <span className="text-black font-semibold">{product.discountedPrice}</span>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-4 space-y-2">
//               <button className="w-full bg-black text-white py-1 rounded-lg hover:bg-gray-800 transition">
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => handleBuyNowClick(product.id)}
//                 className={`w-full border border-black text-black py-1 rounded-lg transition ${
//                   buyNowClicked[product.id] ? 'bg-black text-white' : 'hover:bg-gray-200'
//                 }`}
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
//}





import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';

export default function NewArrivals() {
  const newArrivals = [
    {
      id: 1,
      name: 'New Product 1',
      image: 'product1.webp',
      realPrice: '$299',
      discountedPrice: '$249',
    },
    {
      id: 2,
      name: 'New Product 2',
      image: 'product2.webp',
      realPrice: '$399',
      discountedPrice: '$349',
    },
    {
      id: 3,
      name: 'New Product 3',
      image: 'product3.avif',
      realPrice: '$499',
      discountedPrice: '$459',
    },
    {
      id: 4,
      name: 'New Product 4',
      image: 'product4.webp',
      realPrice: '$199',
      discountedPrice: '$179',
    },
    {
      id: 5,
      name: 'New Product 5',
      image: 'product5.jpg',
      realPrice: '$159',
      discountedPrice: '$129',
    },
    {
      id: 6,
      name: 'New Product 6',
      image: 'product6.webp',
      realPrice: '$249',
      discountedPrice: '$199',
    },
    {
      id: 7,
      name: 'New Product 7',
      image: 'product5.jpg',
      realPrice: '$349',
      discountedPrice: '$299',
    },
    {
      id: 8,
      name: 'New Product 8',
      image: 'product4.webp',
      realPrice: '$449',
      discountedPrice: '$399',
    },
  ];

  const [wishlist, setWishlist] = useState({});
  const [buyNowClicked, setBuyNowClicked] = useState({});
  const [addToCartClicked, setAddToCartClicked] = useState({});

  const handleWishlistToggle = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleBuyNowClick = (id) => {
    setBuyNowClicked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCartClick = (id) => {
    setAddToCartClicked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-[#212121] py-8 px-4">
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">🆕 New Arrivals</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4">
        {newArrivals.map((product) => (
          <div
            key={product.id}
            className={`min-w-[200px] bg-white border border-gray-200 rounded-xl shadow-sm p-4 relative transform transition-transform duration-300 ${
              wishlist[product.id] ? 'border-red-400' : ''
            } hover:scale-105`}
          >
            {/* Wishlist Icon */}
            <button
              onClick={() => handleWishlistToggle(product.id)}
              className={`absolute top-2 right-2 ${
                wishlist[product.id] ? 'text-red-500' : 'text-gray-500'
              }`}
            >
              <HeartIcon className="h-6 w-6" />
            </button>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md"
            />

            {/* Product Details */}
            <h3 className="mt-3 text-lg font-medium text-black">{product.name}</h3>
            <div className="mt-1 flex items-center space-x-2">
              <span className="text-gray-500 line-through">{product.realPrice}</span>
              <span className="text-black font-semibold">{product.discountedPrice}</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 space-y-2">
              <button
                onClick={() => handleAddToCartClick(product.id)}
                className={`w-full py-1 rounded-lg transition font-medium ${
                  addToCartClicked[product.id]
                    ? 'bg-black text-white'
                    : 'bg-yellow-200 text-black hover:bg-black hover:text-white'
                }`}
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNowClick(product.id)}
                className={`w-full border border-black py-1 rounded-lg transition font-medium ${
                  buyNowClicked[product.id]
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-black'
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

