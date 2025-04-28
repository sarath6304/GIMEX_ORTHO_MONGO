const User= require('../model/user.js')


//get user by id service
const getUserById=async(userId) => {
    return await User.findById(userId).select('-password'); 
};

//Update address service
const updateUserAddress= async(userId,shippingDetails)=>{
    return await User.findByIdAndUpdate(
        userId,
        { shippingDetails },
        { new: true, runValidators: true }
      ).select('-password');
}
module.exports = {
    getUserById,
    updateUserAddress,
  };
 