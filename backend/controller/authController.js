const authService = require('../service/authService');
const multer=require('multer');
const upload=multer();

const register=async(req,res)=>{
    try{
        const {name , email , password }=req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:'Please enter all fields'
            });
        }
        const result=await authService.registerUser({name,email,password});
        res.status(201).json({
            success:true,
            data:result.user,
            token:result.token
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
    
};



const login=async(req,res)=>{
    console.log('Login started...')
    try{
        const { email , password }=req.body;
        console.log('Login data:',req.body);

        if(!email || !password){
           return res.status(400).json({
                success:false,
                message:'Please enter all fields'
            });
        }
        console.log('attempting login');
        const result=await authService.loginUser({email,password});
        res.status(200).json({
            success:true,
            data:result.user,
            token:result.token
        });
    }
    catch(error){
        console.log('Login error:',error.stack);
        res.status(401).json({
            success:false,
            message:error.message
        });
    }
}



module.exports={
    register:[upload.none(), register],  // multer middleware to handle file
    login:[upload.none(), login], // multer middleware to handle file
    
};