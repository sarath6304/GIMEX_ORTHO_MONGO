// import React from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { MdEdit } from "react-icons/md";

// const ManageProfile = () => {
//   return (
//     <div className="min-h-screen bg-gray-600 flex flex-col items-center p-4">
//       {/* Profile Section */}
//       <div className="w-full bg-gray-600 shadow-md p-4 flex items-center justify-between rounded-lg">
//         <div className="flex items-center gap-4">
//           <FaUserCircle className="text-6xl text-white" />
//           <div>
//             <h2 className="text-xl font-semibold text-white">John Doe</h2>
//             <p className="text-white">johndoe@example.com</p>
//           </div>
//         </div>
//         <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//           <MdEdit /> Edit Profile
//         </button>
//       </div>

//       {/* Options Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full max-w-2xl">
//         {[
//           { name: "Track Order" },
//           { name: "Order History" },
//           { name: "Wishlist" },
//           { name: "Help" },
//         ].map((option, index) => (
//           <div
//             key={index}
//             className="bg-gray-700 text-white text-xl font-semibold p-6 rounded-lg flex justify-center items-center shadow-md cursor-pointer hover:bg-gray-800"
//           >
//             {option.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageProfile;



// import React from "react";
// import { UserCircleIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

// const ManageProfile = () => {
//   return (
//     <div className="min-h-screen bg-[#212121] flex flex-col items-center p-4">
//       {/* Profile Section */}
//       <div className="w-full bg-[#303030] shadow-md p-4 flex items-center justify-between rounded-lg">
//         <div className="flex items-center gap-4">
//           <UserCircleIcon className="h-16 w-16 text-white" />
//           <div>
//             <h2 className="text-xl font-semibold text-white">John Doe</h2>
//             <p className="text-white">johndoe@example.com</p>
//           </div>
//         </div>
//         <button className="flex items-center gap-2 bg-[#212121] text-white px-4 py-2 rounded-lg hover:bg-yellow-200 hover:text-black">
//           <PencilSquareIcon className="h-5 w-5" /> Edit Profile
//         </button>
//       </div>

//       {/* Options Grid */}
//     <div className="w-full h-[80vh] flex-col justify-center">
//       <div className="grid grid-cols-2 h-full md:grid-rows-4 gap-6 mt-6 w-full bg-[#303030]">
//         {[
//           { name: "Track Order", path:"/trackOrder" },
//           { name: "Order History", path:"/history" },
//           { name: "Wishlist", path:"/wishlist" },
//           { name: "Help", path:"/contact" },
//         ].map((option, index) => (
//           <div
//             key={index}
//             className="bg-[#303030] text-white border-2 border-[#212121] text-xl font-semibold p-6 rounded-lg flex justify-center items-center shadow-md cursor-pointer hover:bg-yellow-200 hover:text-black"
//           >
//             {option.name}
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default ManageProfile;



// import React from "react";
// import { UserCircleIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

// const ManageProfile = () => {
//   return (
//     <div className="min-h-screen bg-[#212121] flex flex-col items-center px-4 py-6 overflow-x-hidden w-full">
//       {/* Profile Section */}
//       <div className="w-full max-w-3xl bg-[#303030] shadow-md p-4 flex flex-col sm:flex-row items-center justify-between rounded-lg gap-4">
//         <div className="flex items-center gap-4">
//           <UserCircleIcon className="h-16 w-16 text-white" />
//           <div>
//             <h2 className="text-xl font-semibold text-white text-center sm:text-left">John Doe</h2>
//             <p className="text-white text-center sm:text-left">johndoe@example.com</p>
//           </div>
//         </div>
//         <button className="flex items-center gap-2 bg-[#212121] text-white px-4 py-2 rounded-lg hover:bg-yellow-200 hover:text-black transition">
//           <PencilSquareIcon className="h-5 w-5" /> Edit Profile
//         </button>
//       </div>

//       {/* Options Grid */}
//       <div className="w-full max-w-3xl mt-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
//           {[
//             { name: "Track Order", path: "/trackOrder" },
//             { name: "Order History", path: "/history" },
//             { name: "Wishlist", path: "/wishlist" },
//             { name: "Help", path: "/contact" },
//           ].map((option, index) => (
//             <div
//               key={index}
//               className="bg-[#303030] text-white border-2 border-[#212121] text-lg font-semibold p-6 rounded-lg flex justify-center items-center shadow-md cursor-pointer hover:bg-yellow-200 hover:text-black transition"
//             >
//               {option.name}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageProfile;









import React from "react";
import { UserCircleIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const ManageProfile = () => {
  return (
    <div className="min-h-screen w-screen bg-[#212121] flex flex-col items-center px-4 py-6 overflow-hidden">
      {/* Profile Section */}
      <div className="w-full max-w-3xl bg-[#303030] shadow-md p-4 flex flex-col sm:flex-row items-center justify-between rounded-lg gap-4 overflow-hidden">
        <div className="flex items-center gap-4">
          <UserCircleIcon className="h-16 w-16 text-white shrink-0" />
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-white">John Doe</h2>
            <p className="text-white">johndoe@example.com</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-[#212121] text-white px-4 py-2 rounded-lg hover:bg-yellow-200 hover:text-black transition">
          <PencilSquareIcon className="h-5 w-5" /> <Link to='/edit_profile'> Edit Profile </Link>
        </button>
      </div>

      {/* Options Grid */}
      <div className="w-full max-w-3xl mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {[
            { name: "Track Order", path: "/trackOrder" },
            { name: "Order History", path: "/history" },
            { name: "Wishlist", path: "/wishlist" },
            { name: "Help", path: "/contact" },
          ].map((option, index) => (
            <div
              key={index}
              className="bg-[#303030] text-white border-2 border-[#212121] text-lg font-semibold p-6 rounded-lg flex justify-center items-center shadow-md cursor-pointer hover:bg-yellow-200 hover:text-black transition"
            >
              <Link to={option.path}>{option.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
