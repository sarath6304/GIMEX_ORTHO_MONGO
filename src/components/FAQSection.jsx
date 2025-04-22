// 'use client';

// import React, { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/24/solid';

// const categories = [
//   { name: 'General', id: 'general' },
//   { name: 'Product Details', id: 'product-details' },
//   { name: 'Installation', id: 'installation' },
//   { name: 'Returns & Warranty', id: 'returns-warranty' },
// ];

// const faqs = {
//   general: [
//     {
//       question: 'What is your range of vehicle accessories?',
//       answer: 'We offer a comprehensive range of accessories including seat covers, floor mats, tech gadgets, lighting systems, and much more. Our catalog is updated regularly with the latest trends in vehicle enhancements.',
//     },
//     {
//       question: 'Are your accessories universal?',
//       answer: 'Many of our accessories are designed to be universal, fitting a wide range of vehicle models. However, we also offer model-specific products. Always check the compatibility section of the product page.',
//     },
//   ],
//   'product-details': [
//     {
//       question: 'What materials are used for your seat covers?',
//       answer: 'Our seat covers are made from premium materials such as leatherette, neoprene, and breathable mesh fabrics, ensuring durability and comfort. Detailed material information is available on each product page.',
//     },
//     {
//       question: 'Do you provide weatherproof floor mats?',
//       answer: 'Yes, we offer all-weather floor mats that are made from high-grade rubber and polymer composites to protect your vehicle’s interior against dirt, spills, and wear.',
//     },
//   ],
//   installation: [
//     {
//       question: 'Do you offer installation guides?',
//       answer: 'Absolutely! Every product comes with an installation guide, and we also offer video tutorials on our website for many popular items. Our customer service team is ready to assist if needed.',
//     },
//     {
//       question: 'Can I get professional installation services?',
//       answer: 'We offer professional installation services in selected cities. You can book these services online while making your purchase, or visit our partner workshops listed on our website.',
//     },
//   ],
//   'returns-warranty': [
//     {
//       question: 'What is your return policy?',
//       answer: 'We accept returns within 30 days of purchase provided the item is unused and in its original packaging. For details, visit our returns page or contact support.',
//     },
//     {
//       question: 'Do your products come with a warranty?',
//       answer: 'Yes, most products come with a 1-year warranty covering manufacturing defects. Specific warranty details are mentioned on each product page.',
//     },
//   ],
// };

// export default function FAQPage() {
//   const [selectedCategory, setSelectedCategory] = useState('general');
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-[#212121] text-white flex">
//       {/* Sidebar Navigation */}
//       <aside className="w-1/4 bg-[#1a1a1a] p-6 md:block">
//         <h3 className="text-2xl font-semibold mb-6">Categories</h3>
//         <ul className="space-y-4">
//           {categories.map((cat) => (
//             <li key={cat.id}>
//               <button
//                 className={`w-full text-left px-4 py-2 rounded-lg transition ${
//                   selectedCategory === cat.id ? 'bg-yellow-200 text-black' : 'bg-[#333]'
//                 }`}
//                 onClick={() => {
//                   setSelectedCategory(cat.id);
//                   setOpenIndex(null);
//                 }}
//               >
//                 {cat.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* FAQ Content */}
//       <main className="flex-1 p-8">
//         <h2 className="text-4xl font-bold mb-8 capitalize">{selectedCategory.replace('-', ' ')} FAQs</h2>
//         <div className="space-y-6 max-w-3xl mx-auto">
//           {faqs[selectedCategory].map((faq, index) => (
//             <div key={index} className="border border-gray-600 rounded-xl p-2 overflow-hidden">
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <span className="text-lg">{faq.question}</span>
//                 <ChevronDownIcon
//                   className={`h-6 w-6 transform transition-transform duration-300 ${
//                     openIndex === index ? 'rotate-180' : 'rotate-0'
//                   }`}
//                 />
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-6 text-gray-300 leading-relaxed">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }








// 'use client';

// import React, { useState } from 'react';
// import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

// const categories = [
//   { name: 'General', id: 'general' },
//   { name: 'Product Details', id: 'product-details' },
//   { name: 'Installation', id: 'installation' },
//   { name: 'Returns & Warranty', id: 'returns-warranty' },
// ];

// const faqs = {
//   general: [
//     {
//       question: 'What is your range of vehicle accessories?',
//       answer: 'We offer a comprehensive range of accessories including seat covers, floor mats, tech gadgets, lighting systems, and much more. Our catalog is updated regularly with the latest trends in vehicle enhancements.',
//     },
//     {
//       question: 'Are your accessories universal?',
//       answer: 'Many of our accessories are designed to be universal, fitting a wide range of vehicle models. However, we also offer model-specific products. Always check the compatibility section of the product page.',
//     },
//   ],
//   'product-details': [
//     {
//       question: 'What materials are used for your seat covers?',
//       answer: 'Our seat covers are made from premium materials such as leatherette, neoprene, and breathable mesh fabrics, ensuring durability and comfort. Detailed material information is available on each product page.',
//     },
//     {
//       question: 'Do you provide weatherproof floor mats?',
//       answer: 'Yes, we offer all-weather floor mats that are made from high-grade rubber and polymer composites to protect your vehicle’s interior against dirt, spills, and wear.',
//     },
//   ],
//   installation: [
//     {
//       question: 'Do you offer installation guides?',
//       answer: 'Absolutely! Every product comes with an installation guide, and we also offer video tutorials on our website for many popular items. Our customer service team is ready to assist if needed.',
//     },
//     {
//       question: 'Can I get professional installation services?',
//       answer: 'We offer professional installation services in selected cities. You can book these services online while making your purchase, or visit our partner workshops listed on our website.',
//     },
//   ],
//   'returns-warranty': [
//     {
//       question: 'What is your return policy?',
//       answer: 'We accept returns within 30 days of purchase provided the item is unused and in its original packaging. For details, visit our returns page or contact support.',
//     },
//     {
//       question: 'Do your products come with a warranty?',
//       answer: 'Yes, most products come with a 1-year warranty covering manufacturing defects. Specific warranty details are mentioned on each product page.',
//     },
//   ],
// };

// export default function FAQPage() {
//   const [selectedCategory, setSelectedCategory] = useState('general');
//   const [openIndex, setOpenIndex] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#212121] text-white flex flex-col md:flex-row">
//       {/* Sidebar Toggle Button for Mobile */}
//       <div className="md:flex justify-between items-center bg-[#212121] p-6">
//         <h3 className="text-white font-extrabold">Categories</h3>
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? (
//             <XMarkIcon className="w-6 h-6" />
//           ) : (
//             <Bars3Icon className="w-6 h-6" />
//           )}
//         </button>
//       </div>

//       {/* Sidebar Navigation */}
//       <aside
//         className={`bg-[#1a1a1a] md:block md:w-1/4 p-6 transition-all duration-300 ease-in-out ${
//           menuOpen ? 'block' : 'hidden'
//         } md:block`}
//       >
//         <ul className="space-y-4">
//           {categories.map((cat) => (
//             <li key={cat.id}>
//               <button
//                 className={`w-full text-left px-4 py-2 rounded-lg transition ${
//                   selectedCategory === cat.id ? 'bg-yellow-200 text-black' : 'bg-[#333]'
//                 }`}
//                 onClick={() => {
//                   setSelectedCategory(cat.id);
//                   setOpenIndex(null);
//                   setMenuOpen(false);
//                 }}
//               >
//                 {cat.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* FAQ Content */}
//       <main className="flex-1 p-6 sm:p-8">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 capitalize">
//           {selectedCategory.replace('-', ' ')} FAQs
//         </h2>
//         <div className="space-y-6 max-w-3xl mx-auto">
//           {faqs[selectedCategory].map((faq, index) => (
//             <div key={index} className="border border-yellow-200 rounded-xl p-2 overflow-hidden">
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none focus:ring-2"
//               >
//                 <span className="text-lg">{faq.question}</span>
//                 <ChevronDownIcon
//                   className={`h-6 w-6 transform transition-transform duration-300 ${
//                     openIndex === index ? 'rotate-180' : 'rotate-0'
//                   }`}
//                 />
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-6 text-gray-300 leading-relaxed">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }







'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const categories = [
  { name: 'General', id: 'general' },
  { name: 'Product Details', id: 'product-details' },
  { name: 'Installation', id: 'installation' },
  { name: 'Returns & Warranty', id: 'returns-warranty' },
];

const faqs = {
  general: [
    {
      question: 'What is your range of vehicle accessories?',
      answer: 'We offer a comprehensive range of accessories including seat covers, floor mats, tech gadgets, lighting systems, and much more. Our catalog is updated regularly with the latest trends in vehicle enhancements.',
    },
    {
      question: 'Are your accessories universal?',
      answer: 'Many of our accessories are designed to be universal, fitting a wide range of vehicle models. However, we also offer model-specific products. Always check the compatibility section of the product page.',
    },
  ],
  'product-details': [
    {
      question: 'What materials are used for your seat covers?',
      answer: 'Our seat covers are made from premium materials such as leatherette, neoprene, and breathable mesh fabrics, ensuring durability and comfort. Detailed material information is available on each product page.',
    },
    {
      question: 'Do you provide weatherproof floor mats?',
      answer: 'Yes, we offer all-weather floor mats that are made from high-grade rubber and polymer composites to protect your vehicle’s interior against dirt, spills, and wear.',
    },
  ],
  installation: [
    {
      question: 'Do you offer installation guides?',
      answer: 'Absolutely! Every product comes with an installation guide, and we also offer video tutorials on our website for many popular items. Our customer service team is ready to assist if needed.',
    },
    {
      question: 'Can I get professional installation services?',
      answer: 'We offer professional installation services in selected cities. You can book these services online while making your purchase, or visit our partner workshops listed on our website.',
    },
  ],
  'returns-warranty': [
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase provided the item is unused and in its original packaging. For details, visit our returns page or contact support.',
    },
    {
      question: 'Do your products come with a warranty?',
      answer: 'Yes, most products come with a 1-year warranty covering manufacturing defects. Specific warranty details are mentioned on each product page.',
    },
  ],
};

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#212121] mt-8 text-white flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside
        className={`bg-[#1a1a1a] p-6 transition-all duration-300 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        } md:block md:w-1/4`}
      >
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  selectedCategory === cat.id ? 'bg-yellow-200 text-black' : 'bg-[#333]'
                }`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenIndex(null);
                  setMenuOpen(false);
                }}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* FAQ Content */}
      <main className="flex-1 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold capitalize">
            {selectedCategory.replace('-', ' ')} FAQs
          </h2>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <ChevronDownIcon
              className={`w-6 h-6 transition-transform duration-300 ${
                menuOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs[selectedCategory].map((faq, index) => (
            <div key={index} className="border border-yellow-200 rounded-xl p-2 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none focus:ring-2"
              >
                <span className="text-lg">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


