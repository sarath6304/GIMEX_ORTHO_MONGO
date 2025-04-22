import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Truck, HandCoins, Gem } from 'lucide-react';
import free_delivery from '../assets/free_delivery.svg';
import { useEffect } from 'react';

export default function PromoSection() {

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
    justifyContent: isSmallScreen ? 'flex-start' : 'space-between',
  };

  const boxStyle = {
    width: isSmallScreen ? '100%' : '33.33%',
    marginBottom: isSmallScreen ? '1rem' : '0',
  };

  const descStyle = {
    color: '#4B5563',
    margin: '0',
    fontSize: '14px'
  };
  
  return (

    <div style={{...sectionStyle}} className='bg-[#FEF8F8] w-full flex items-center py-6 font-[Inter] overflow-hidden'>
      {/* Free Delivery */}
      <div style={{...boxStyle}} className='flex items-center p-3 text-[#9E703F] box-border'>
        <Truck className='w-[55px] h-[55px] text-[#9E703F] flex-shrink-0 mr-3'/>
        <div>
          <h3 className='font-bold text-[19px] mb-1'>FREE DELIVERY</h3>
          <p className='text-[#4B5563] m-0 text-[14px]'>
            Free Delivery on all orders above Rs.399/-
          </p>
        </div>
      </div>
      
      {/* Secure Payments */}
      <div style={{...boxStyle}} className='flex items-center p-3 text-[#9E703F] box-border'>
        <HandCoins className='w-[55px] h-[55px] text-[#9E703F] flex-shrink-0 mr-3'/>
        <div>
          <h3 className='font-bold text-[19px] mb-1'>SECURE PAYMENTS</h3>
          <p className='text-[#4B5563] m-0 text-[14px]'>
            We use secure payment methods to ensure that your personal information is safe.
          </p>
        </div>
      </div>
      
      {/* Reward Points */}
      <div style={{...boxStyle}} className='flex items-center p-3 text-[#9E703F] box-border'>
        <Gem className='w-[55px] h-[55px] text-[#9E703F] flex-shrink-0 mr-3'/>
        <div>
          <h3 className='font-bold text-[19px] mb-1'>REWARD POINTS</h3>
          <p className='text-[#4B5563] m-0 text-[14px]'>
            Collect points with each product purchase & redeem gifts.
          </p>
        </div>
      </div>
    </div>
   
    // <section className='bg-[#FEF8F8] w-full max-w-screen-lg mx-auto py-6 flex flex-wrap sm:flex-nowrap items-center justify-between font-[Inter]'>
    // <section style={styles.section}>
    //   {/* Free Delivery */}
    //   {/* <div className="h-auto text-[#9E703F] w-full sm:w-1/3 grid grid-cols-[auto_1fr] gap-x-3 sm:gap-0 justify-center items-center p-3"> */}
    //   <div style={styles.promoBox}>
    //     {/* <Truck className="w-[55px] h-[55px] text-[#9E703F]" /> */}
    //     <Truck style={styles.icon}/>
    //     <div>
    //       <h3 className="font-bold text-[19px]">FREE DELIVERY</h3>
    //       <p className="text-gray-600 text-wrap">
    //         Free Delivery on all orders above Rs.399/-
    //       </p>
    //     </div>
    //   </div>
    //   {/* Secure Payments */}
    //   {/* <div className="h-auto text-[#9E703F] w-full sm:w-1/3 grid grid-cols-[auto_1fr] gap-x-3 justify-center items-center p-3"> */}
    //   <div className="h-auto text-[#9E703F] w-full sm:w-1/3 flex items-center p-3">
    //     {/* <HandCoins className="w-[55px] h-[55px] text-[#9E703F]" /> */}
    //     <HandCoins className="w-[55px] h-[55px] text-[#9E703F] flex-shrink-0 mr-3" />
    //     <div>
    //       <h3 className="font-bold text-[19px]">SECURE PAYMENTS</h3>
    //       <p className="text-gray-600 text-wrap">
    //         We use secure payment methods to ensure that your personal information is safe.
    //       </p>
    //     </div>
    //   </div>
    //   {/* Reward Points */}
    //   {/* <div className="h-auto text-[#9E703F] w-full sm:w-1/3 grid grid-cols-[auto_1fr] gap-x-3 justify-center items-center p-3"> */}
    //   <div className="h-auto text-[#9E703F] w-full sm:w-1/3 flex items-center p-3">
    //     {/* <Gem className="w-[55px] h-[55px] text-[#9E703F]" /> */}
    //     <Gem className="w-[55px] h-[55px] text-[#9E703F] flex-shrink-0 mr-3" />
    //     <div>
    //       <h3 className="font-bold text-[19px]">REWARD POINTS</h3>
    //       <p className="text-gray-600 text-wrap">
    //         Collect points with each product purchase & redeem gifts.
    //       </p>
    //     </div>
    //   </div>

    // </section>

    // <section className='bg-[#FEF8F8] w-full py-6 flex flex-wrap items-center justify-center font-[Inter]'>
    //     <div className='h-[108px] text-[#9E703F] w-1/3 grid gap-x-3 justify-center items-center p-3'>
    //     <Truck  className='w-[55px] h-[55px] text-[#9E703F] col-start-1 row-start-1 row-end-2'/>
    //     <div className='col-start-2 p-3'>
    //       <h3 className='font-bold text-[19px]'>FREE DELIVERY</h3>
    //       <p className='text-gray-600 text-wrap w-[326px]'>
    //         Free Delivery on all orders above Rs.399/-
    //       </p>
    //     </div>
    //   </div> 
    //   <div className='h-[108px] text-[#9E703F] w-full sm:w-1/3 grid gap-x-3 justify-center items-center'>
    //       <HandCoins className='w-[55px] h-[55px] text-[#9E703F] col-start-1 row-start-1 row-end-2' />
      //   <div className='col-start-2 p-3'>
      //     <h3 className='font-bold text-[19px]'>SECURE PAYMENTS</h3>
      //     <p className='text-gray-600 text-wrap w-[326px]'>
      //     We use secure payment methods to ensure that your personal information is safe.
      //     </p>
      //   </div>
      // </div>
      //   <div className='h-[108px] text-[#9E703F] w-full sm:w-1/3 grid gap-x-3 justify-center items-center'>
      //   <Gem className='w-[55px] h-[55px] text-[#9E703F] col-start-1 row-start-1 row-end-2' />
      //   <div className='col-start-2 p-3'>
      //     <h3 className='font-bold text-[19px]'>REWARD POINTS</h3>
      //     <p className='text-gray-600 text-wrap w-[326px]'>
      //     Collect points with each product purchase & redeem gifts.
      //     </p>
      //   </div>
      // </div>
    // </section>

  );
};

