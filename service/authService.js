const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/user.js');
const dotenv = require('dotenv');


const generateToken = (user) => {
  const JWT_SECRET=process.env.JWT_SECRET
    console.log('Generating token')
    try {
      const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          JWT_SECRET,
          { expiresIn: '7d' }
      );
      console.log('Token generated successfully');
      return token;
  } catch (error) {
      console.error('Token generation failed:', error);
      throw new Error('Failed to generate token');
  }

  };

  //Register service
  const registerUser = async ({ name, email, password }) => {
    try{
    console.log("Registering.....")
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      console.log(existingUser.email);
      throw new Error('Email already in use');
    }
   
  
    const hashedPassword = await bcrypt.hash(password, 12);
    
    console.log('Creating user in db')
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log('generating token');
    const token = generateToken(user);
    return { user: { ...user._doc, password: undefined }, token };
  }
  catch(error){
    console.error(error.stack);
  }
  };

  //Login service
  const loginUser = async ({ email, password }) => {
    try {
        console.log('Attempting to find user with email:', email);
        
        // Find user
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            console.log('No user found with email:', email);
            throw new Error('Invalid email or password');
        }
        console.log('User found, verifying password');

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password verification failed for user:', email);
            throw new Error('Invalid email or password');
        }
        console.log('Password verified successfully');

        // Generate token
        console.log('Generating authentication token');
        const token = generateToken(user);

        // Prepare user data (excluding password)
        const userData = user.toObject();
        delete userData.password;

        console.log('Login successful for user:', email);
        return { 
            user: userData, 
            token 
        };
    } catch (error) {
        console.error('Login failed:', error.message);
        console.error('Stack trace:', error.stack);
        throw error; // Re-throw to be handled by controller
    }
};
  
  module.exports = {
    registerUser,
    loginUser,
  };