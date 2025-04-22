import React, { useState, useEffect } from 'react';

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Example data - replace with your actual reviews
  const reviews = [
    {
      text: "I have been using the Success Ortho Powder that helps me to make bone strong. Also it helps to reduce rigidity of the bones. I am satisfied with the product.",
      name: "Seema Patil",
      location: "Mumbai"
    },
    {
      text: "I'm a huge fan of Ortho powder and their products. They offer high-quality, cruelty-free, & affordable products that I love. I highly recommend them to anyone looking for natural & effective Ortho(bone) products.",
      name: "Shilpi Agarwal",
      location: "Bangalore"
    },
    {
      text: "A nice brand, delivering organic products for treating bone pain at an affordable range.",
      name: "Supranita Panchal",
      location: "Mohali"
    },
    {
      text: "The natural ingredients really helped with my bone joint issues. I've seen a noticeable difference in just two weeks.",
      name: "Rahul Sharma",
      location: "Delhi"
    },
    {
      text: "Finally found a product that doesn't irritate me because it really helpful for me. when i suffer from bone pain, this product has been very helpful.",
      name: "Priya Verma",
      location: "Chennai"
    }
    // You can add as many reviews as you want here
  ];
  
  const reviewsPerView = 3;
  const totalSlides = Math.max(0, reviews.length - reviewsPerView) + 1;

  const handleDotClick = (index) => {
    if (index === activeIndex || index >= totalSlides) return;
    setIsTransitioning(true);
    setActiveIndex(index);
  };

  const slideLeft = () => {
    if (activeIndex > 0) {
      setIsTransitioning(true);
      setActiveIndex(activeIndex - 1);
    }
  };

  const slideRight = () => {
    if (activeIndex < totalSlides - 1) {
      setIsTransitioning(true);
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Calculate card width and gap for accurate sliding
  const cardWidth = 350;
  const cardGap = 24;

  return (
    <div>
      {/* Separate white background section for the title */}
      <div className="w-full bg-white py-10">
        <div className="container underline  mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">Customer Reviews</h2>
            <div className="w-44 h-1 bg-amber-400 mx-auto mt-4"></div>
          </div>
        </div>
      </div>
      
      {/* Reviews section with rose background */}
      <div className="w-full bg-rose-100 py-16">
        <div className="container mx-auto px-4">
          {/* Reviews slider container */}
          <div className="relative">
            {/* Previous button */}
            {activeIndex > 0 && (
              <button 
                onClick={slideLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
                aria-label="Previous reviews"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Reviews slider */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeIndex * (cardWidth + cardGap)}px)` }}
              >
                {reviews.map((review, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 rounded shadow-lg border-l-4 border-amber-400 flex flex-col justify-between flex-shrink-0"
                    style={{ width: `${cardWidth}px` }}
                  >
                    <p className="text-gray-700 mb-6">{review.text}</p>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-amber-600">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            {activeIndex < totalSlides - 1 && (
              <button 
                onClick={slideRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
                aria-label="Next reviews"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-colors ${activeIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                aria-label={`View review set ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}