const userService = require('../service/userService');
const multer = require('multer');
const upload = multer();

const updateAddress = async (req, res) => {
    console.log('Update address started...');
    try {
        const userId=req.user.id;
        console.log('User ID:', userId);
        
        const shippingDetails ={
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode
        };
        console.log('Shipping details:', shippingDetails);
        if (!shippingDetails) {
            return res.status(400).json({
                success: false,
                message: 'Please enter all fields'
            });
        }
        console.log('Attempting to update address...');
        const result = await userService.updateUserAddress(userId, shippingDetails);
        console.log('Address updated successfully:', result);
        res.status(200).json({
            success: true,
            data: result
        });
    }
    catch (error) {
        console.log('Error updating address:', error.stack);
        res.status(500).json({
            success: false,
            message: error.message

        });
    }
        
};


module.exports = {
    updateAddress: [upload.none(), updateAddress] 
};
