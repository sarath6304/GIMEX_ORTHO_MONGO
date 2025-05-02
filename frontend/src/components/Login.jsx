import React from 'react'
import "../index.css"
import zymo_image from "./zymo2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export default function Login() {
    //"build": "vite build",
  return (
    
    <div className="external_div mx-auto w-[100vw] h-[100vh] border-4 border-black flex flex-row justify-evenly items-center bg-[#212121] text-white"> 
        <div className="left_div border-2 border-[#212121] rounded-xl w-1/2 h-[95%] flex flex-col items-center justify-evenly">
            <div className="left_flex_item border-2 border-[#212121] bg-[#303030] rounded-lg w-[90%] h-1/5 flex justify-center items-center">
                <img src={zymo_image} alt="zymo" className='w-full h-full object-contain border-2 border-[#212121] rounded-lg bg-[#303030]'/>
            </div>
            <div className="left_flex_item border-2 border-[#212121] bg-[#303030] rounded-lg w-[90%] h-1/5 flex flex-col justify-evenly">

                <h2 className='text-center font-extrabold scale-125'> Drive with Us! </h2>
                <h4 className='text-center font-extrabold'> Your One-In-All MarketPlace for Vehicle Accessories </h4>
            </div>
            <div className="left_flex_item flex flex-row justify-evenly items-center border-2 border-[#212121] w-full h-[50%] bg-[#303030] rounded-lg">
                <div className="features_flex_item flex flex-col justify-evenly p-4 h-[90%] w-[31%] border-1 border-yellow-200 rounded-lg">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl" />
                    <h4 className='text-center'> Crafted & Maintained by ZYMO in Mumbai! </h4>
                    <h4 className='text-center'> Your One-in-All Place for Accessories</h4>
                </div>
                <div className="features_flex_item flex flex-col p-4 justify-evenly h-[90%] w-[31%] border-1 border-yellow-200 rounded-lg">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl mx-2" />
                    <h4 className='text-center'> Crafted & Maintained by ZYMO in Mumbai! </h4>
                    <h4 className='text-center'> Interior, Exterior, Tyring: All in One </h4>
                </div>
                <div className="features_flex_item flex flex-col p-4 justify-evenly h-[90%] w-[31%] border-1 border-yellow-200 rounded-lg">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl mx-2" />
                    <h4> Crafted & Maintained by ZYMO in Mumbai! </h4>
                    <h4 className='text-center'> Interior, Exterior, Tyring: All in One </h4>
                </div>
            </div>
        </div>
        
        <div className="right_div border-2 border-[#212121] rounded-xl w-1/3 h-[90%] bg-[#303030] flex flex-col justify-evenly items-center">
            <div className="heading h-1/5 w-[90%] flex flex-col justify-center items-center">
                 <h2 className='text-center font-semibold font-sans text-3xl shadow-[3px_3px_10px_rgba(255,255,255,0.8)]'> Your Journey Begins Here!! </h2>
            </div>

            <div className="form h-3/5 w-[90%]">
            <form action="" className='px-2 py-2'>
                <label htmlFor="email"> EmailID: </label>
                <input type="email" name="email" id="email" className='border-2 border-black rounded-lg text-black px-2 py-2 text-sm scale-90'/>
                <br />
                <br />
                <label htmlFor="password"> Create Password: </label>
                <input type="password" name="password" id="password" className='border-2 border-black rounded-lg text-black px-2 py-2 scale-90' placeholder='Ram@123' />
                <br />
                <br />
                <label htmlFor="password_conf"> Confirm Password: </label>
                <input type="password" name="password_conf" id="password_conf" className='border-2 border-black rounded-lg text-black px-2 py-2 scale-90' placeholder='Ram@123'/>
                <br />
                <br />
                
                
                <button type="submit" className='bg-yellow-200 text-[#212121] px-2 py-2 block mx-auto border-1 border-yellow-200 rounded-lg font-extrabold'> <Link to='/home'> Create Account </Link> </button>     
                </form>  
            </div>

        </div>
    </div>

    
    // <div className="p-10 bg-blue-500 text-white border-4 border-red-500">
    //   If this text is white and the background is blue, Tailwind colors are working!
    // </div>

  )
}
