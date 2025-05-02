import React from "react";
import { useEffect, useState } from "react";

const ExploreCategories = () => {

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const breakpoint = 640; // sm breakpoint
  
  // Update windowWidth when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Initial window width check
    handleResize();
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Determine if we're on a small screen
  const isSmallScreen = windowWidth < breakpoint;
  
  // Dynamic styles based on screen size
  const sectionStyle = {
    flexDirection: isSmallScreen ? 'column' : 'row',
  };

  const imageContainerStyle = {
    width: isSmallScreen ? '100%' : '50%',
  };

  const contentContainerStyle = {
    width: isSmallScreen ? '100%' : '50%',
  };

  const paragraphStyle = {
    width: isSmallScreen ? '100%' : '50%',
    textAlign: 'center'
  };

  return (
    <section style={sectionStyle} className="bg-[#212121] w-full h-auto flex overflow-hidden">
      <div style={imageContainerStyle} className="h-auto">
        <img 
          src="/images/images-upload-knee-pain-500x500.webp" 
          alt="Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div style={contentContainerStyle} className="h-auto p-4 flex flex-col justify-center items-center text-white">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Targeted Relief for Joint & Bone Pain
        </h1>
        <h2 style={paragraphStyle}>
          Our Ortho Powder is specially designed for individuals suffering from arthritis, joint stiffness, and age-related bone discomfort. With powerful natural ingredients, it helps reduce inflammation, support bone strength, and restore mobility—so you can get back to living comfortably.
        </h2>
      </div>
    </section>
  );
};

export default ExploreCategories;
