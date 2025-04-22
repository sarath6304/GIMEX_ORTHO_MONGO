// // import React, { useState } from "react";
// // import productImages from '../images/imageProduct.jpg';
// // import productSecondImage from '../images/shopping.webp'
// // const productData = {
// //   title: "Product Name",
// //   price: "$99.99",
// //   image: productSecondImage,
// //   description: "A premium quality product designed for comfort and durability, perfect for everyday use.",
// //   details: "This product is made from high-quality materials and is designed for durability and style.",
// //   returnPolicy: "Returns are accepted within 30 days of purchase. The item must be in original condition.",
// //   sections: [
// //     { title: "Return Policy", content: "Returns are accepted within 30 days of purchase. The item must be in original condition." },
// //     { title: "Check Pincode for Delivery", content: "Enter your pincode to check delivery availability." },
// //     { title: "Details", content: "This product is made from high-quality materials and is designed for durability and style." }
// //   ]
// // };

// // const ProductDetails = () => {
// //   const [pincode, setPincode] = useState("");

// //   const checkPincode = () => {
// //     alert(pincode === "110001" ? "Delivery available in your area!" : "Sorry, delivery is not available in your area.");
// //   };

// //   return (
// //     <div className="max-w-7xl mx-auto p-4 bg-[#212121]">
// //       {/* Product Image */}
// //       <div className="w-full">
// //         <img
// //           src={productData.image}
// //           alt="Product"
// //           className="w-full h-[50vh] rounded-lg shadow-lg"
// //         />
// //       </div>

// //       {/* Product Information */}
// //       <div className="mt-6">
// //         <h1 className="text-3xl font-semibold text-white">{productData.title}</h1>
// //         <p className="text-white mt-2">{productData.price}</p>
// //         {/* <p className="text-white mt-2">{productData.description}</p> */}
// //       </div>

// //       {/* Dynamic Sections */}
// //       <div className="mt-6 flex flex-col gap-4 bg-[#212121] w-full">
// //         {productData.sections.map((section, index) => (
// //           <div key={index} className="p-4 bg-[#303030] rounded-lg border border-yellow-200">
// //             <h2 className="text-xl font-semibold text-yellow-200 text-center">{section.title}</h2>
// //             {section.title === "Check Pincode for Delivery" ? (
// //               <>
// //                 <div className="mt-2 flex flex-col gap-2 justify-center">
// //                   <input
// //                     type="text"
// //                     placeholder="Enter pincode"
// //                     value={pincode}
// //                     onChange={(e) => setPincode(e.target.value)}
// //                     className="p-2 border rounded w-fit"
// //                   />
// //                   <button onClick={checkPincode} className="px-4 py-2 bg-yellow-200 text-black rounded-lg w-full font-semibold text-lg">
// //                     Check
// //                   </button>
// //                 </div>
// //               </>
// //             ) : (
// //               <p className="text-white mt-2 text-sm text-center">{section.content}</p>
// //             )}
// //           </div>
// //         ))}
// //       </div>

// //       {/* Add to Cart Button */}
// //       <div className="mt-6 text-center">
// //         <button className="px-6 py-3 border border-[#303030] bg-yellow-200 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 w-[40%]" onClick={()=> alert("Added to Cart")}>
// //           Add to Cart
// //         </button>
// //         <button className="px-6 py-3 bg-yellow-200 border border-[#303030] text-black text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 w-[40%]"> Buy Now </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;









// import React, { useState } from "react";
// import productImages from '../images/imageProduct.jpg';
// import productSecondImage from '../images/shopping.webp';

// const productData = {
//   title: "Product Name",
//   price: "$99.99",
//   images: [productSecondImage, productImages],
//   description: "A premium quality product designed for comfort and durability, perfect for everyday use.",
//   details: "This product is made from high-quality materials and is designed for durability and style.",
//   returnPolicy: "Returns are accepted within 30 days of purchase. The item must be in original condition.",
//   sections: [
//     { title: "Return Policy", content: "Returns are accepted within 30 days of purchase. The item must be in original condition." },
//     { title: "Check Pincode for Delivery", content: "Enter your pincode to check delivery availability." },
//     { title: "Details", content: "This product is made from high-quality materials and is designed for durability and style." }
//   ]
// };

// const ProductDetails = () => {
//   const [pincode, setPincode] = useState("");
//   const [activeSections, setActiveSections] = useState({});

//   const checkPincode = () => {
//     alert(pincode === "110001" ? "Delivery available in your area!" : "Sorry, delivery is not available in your area.");
//   };

//   const toggleSection = (index) => {
//     setActiveSections(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }));
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4 bg-[#212121] overflow-x-hidden">
//       {/* Image Scrollbar */}
//       <div className="w-full overflow-x-auto flex space-x-4 scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-[#303030] pb-2">
//         {productData.images.map((img, idx) => (
//           <img
//             key={idx}
//             src={img}
//             alt={`Product view ${idx + 1}`}
//             className="h-[50vh] min-w-[80vw] sm:min-w-[40vw] object-cover rounded-lg shadow-lg"
//           />
//         ))}
//       </div>

//       {/* Product Information */}
//       <div className="mt-6 px-2 sm:px-4">
//         <h1 className="text-3xl font-semibold text-white text-center sm:text-left">{productData.title}</h1>
//         <p className="text-white mt-2 text-center sm:text-left">{productData.price}</p>
//       </div>

//       {/* Toggle Sections */}
//       <div className="mt-6 flex flex-col gap-4 px-2 sm:px-4">
//         {productData.sections.map((section, index) => (
//           <div
//             key={index}
//             className="p-4 bg-[#303030] rounded-lg border border-yellow-200"
//           >
//             <h2
//               className="text-xl font-semibold text-yellow-200 text-center cursor-pointer"
//               onClick={() => toggleSection(index)}
//             >
//               {section.title}
//             </h2>
//             {activeSections[index] && (
//               section.title === "Check Pincode for Delivery" ? (
//                 <div className="mt-2 flex flex-col gap-2 items-center">
//                   <input
//                     type="text"
//                     placeholder="Enter pincode"
//                     value={pincode}
//                     onChange={(e) => setPincode(e.target.value)}
//                     className="p-2 border rounded w-full max-w-xs"
//                   />
//                   <button
//                     onClick={checkPincode}
//                     className="px-4 py-2 bg-yellow-200 text-black rounded-lg w-full max-w-xs font-semibold text-lg"
//                   >
//                     Check
//                   </button>
//                 </div>
//               ) : (
//                 <p className="text-white mt-2 text-sm text-center">{section.content}</p>
//               )
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Add to Cart and Buy Now Buttons */}
//       <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 px-2 sm:px-4">
//         <button
//           className="px-6 py-3 border border-[#303030] bg-yellow-200 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-black hover:text-white transition-colors w-full sm:w-[40%]"
//           onClick={() => alert("Added to Cart")}
//         >
//           Add to Cart
//         </button>
//         <button
//           className="px-6 py-3 bg-yellow-200 border border-[#303030] text-black text-lg font-semibold rounded-lg shadow-md hover:bg-black hover:text-white transition-colors w-full sm:w-[40%]"
//         >
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;






import React, { useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react'; // icon imports
import productImages from '../images/imageProduct.jpg';
import productSecondImage from '../images/shopping.webp';

const productData = {
  title: "Product Name",
  price: "$99.99",
  images: [productSecondImage, productImages],
  description: "A premium quality product designed for comfort and durability, perfect for everyday use.",
  details: "This product is made from high-quality materials and is designed for durability and style.",
  returnPolicy: "Returns are accepted within 30 days of purchase. The item must be in original condition.",
  sections: [
    { title: "Return Policy", content: "Returns are accepted within 30 days of purchase. The item must be in original condition." },
    { title: "Check Pincode for Delivery", content: "Enter your pincode to check delivery availability." },
    { title: "Details", content: "This product is made from high-quality materials and is designed for durability and style." }
  ]
};

const ProductDetails = () => {
  const [pincode, setPincode] = useState("");
  const [activeSections, setActiveSections] = useState({});
  const [activeImage, setActiveImage] = useState(0);

  const checkPincode = () => {
    alert(pincode === "110001" ? "Delivery available in your area!" : "Sorry, delivery is not available in your area.");
  };

  const toggleSection = (index) => {
    setActiveSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % productData.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + productData.images.length) % productData.images.length);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#212121] overflow-x-hidden">
      {/* Clickable Image Carousel */}
      <div className="relative w-full flex justify-center items-center h-[50vh] mb-4">
        <img
          src={productData.images[activeImage]}
          alt={`Product view ${activeImage + 1}`}
          className="h-full w-full object-cover rounded-lg shadow-lg max-w-[100%]"
        />
        <button onClick={prevImage} className="absolute left-2 bg-black/50 p-2 rounded-full text-yellow-200 hover:bg-black transition">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextImage} className="absolute right-2 bg-black/50 p-2 rounded-full text-yellow-200 hover:bg-black transition">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4 px-2 sm:px-4">
        <h1 className="text-3xl font-semibold text-white text-center sm:text-left">{productData.title}</h1>
        <p className="text-white mt-2 text-center sm:text-left">{productData.price}</p>
      </div>

      {/* Toggle Sections */}
      <div className="mt-6 flex flex-col gap-4 px-2 sm:px-4">
        {productData.sections.map((section, index) => (
          <div key={index} className="bg-[#303030] rounded-lg border border-yellow-200 overflow-hidden">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <h2 className="text-xl font-semibold text-yellow-200 text-center w-full">
                {section.title}
              </h2>
              <div className="ml-4 text-yellow-200">
                {activeSections[index] ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>

            {activeSections[index] && (
              section.title === "Check Pincode for Delivery" ? (
                <div className="mt-2 flex flex-col gap-2 items-center px-4 pb-4">
                  <input
                    type="text"
                    placeholder="Enter pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="p-2 border rounded w-full max-w-xs"
                  />
                  <button
                    onClick={checkPincode}
                    className="px-4 py-2 bg-yellow-200 text-black rounded-lg w-full max-w-xs font-semibold text-lg"
                  >
                    Check
                  </button>
                </div>
              ) : (
                <p className="text-white mt-2 px-4 pb-4 text-sm text-center">{section.content}</p>
              )
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 px-2 sm:px-4">
        <button
          className="px-6 py-3 border border-[#303030] bg-yellow-200 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-black hover:text-white transition-colors w-full sm:w-[40%]"
          onClick={() => alert("Added to Cart")}
        >
          Add to Cart
        </button>
        <button
          className="px-6 py-3 bg-yellow-200 border border-[#303030] text-black text-lg font-semibold rounded-lg shadow-md hover:bg-black hover:text-white transition-colors w-full sm:w-[40%]"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
