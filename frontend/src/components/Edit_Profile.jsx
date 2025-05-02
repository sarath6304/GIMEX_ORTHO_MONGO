// import React, { useState } from "react";

// const Edit_Profile = () => {
//   const [formData, setFormData] = useState({
//     email: "johndoe@example.com",
//     phone: "1234567890",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Profile Updated Successfully!");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#212121] p-4">
//       <div className="bg-[#212121] shadow-lg rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4 bg-[#303030]">Edit Profile</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-[#303030] font-medium">Email ID</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full mt-1 p-2 border border-[#212121] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Save Changes
//           </button>
//         </form>
//         <button
//           className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
//         >
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Edit_Profile;



import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    email: "johndoe@example.com",
    phone: "1234567890",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
     setBtnColor("bg-green-500 text-white"); // Change button color on submit
  };

 const [btnColor, setBtnColor] = useState("bg-yellow-200 text-black");



  return (
    <div className="md:w-full min-h-screen flex flex-col items-center justify-center bg-[#212121] p-4">
      <UserCircleIcon className="h-32 w-32 text-white mb-4" />
      <div className="bg-[#303030] shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Edit Your Zymo Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-medium">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-[#212121] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-white font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-yellow-200 py-2 text-[#212121] rounded-lg font-semibold hover:bg-[#212121] ${btnColor} hover:text-white`}
          >
            Save Changes
          </button>
        </form>
        <button
          className="w-full mt-4 text-white py-2 rounded-lg font-semibold hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default EditProfileForm;
