// Route for login 

import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser= async (req ,res) => {

  try {
    const {email,password}=req.body;
    const user=await userModel.findOne({email});

    // if not present user 
    if(!user){
        return res.json({success:false,message:"User doesnot exists"});
    }

    // password matching 
    const isMatch = await bcrypt.compare(password,user.password);

    if(isMatch){
        const token = createToken(user._id);
        res.json({success:true,token})
    }
    else{
        res.json({success:false,message:"invalid password "})
    }
    
  } catch (error) {

    console.log(error);
    return res.json({
        success:false,
        message:error.message,

    })
    
  }


}

// Route for user register 

const registerUser = async (req ,res)=>{
    try {
        const {name,email,password}=req.body;
        // checking user already exists or not 
        const exists =await userModel.findOne({email});
        if(exists){
            return res.json({
                success:false,
                message:"User already exists"
            })
        }
        // // validating email and strong password 
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Email is not valid"
            })
        }
       // password 
       if(password.length < 8) {
        return res.json({success:false,message:"Password id too weak"})
       }

       // hahsing the password 
       const salt =await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password,salt);

       // creating user 
       const newUser = new userModel({
        name,email,password:hashedPassword
       })
       
       const user =await newUser.save();
       const token = createToken(user._id);

       res.json({success:true,token});


    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            message:error.message,

        })
    }

}

// route for admin login 

const adminLogin = async (req ,res) =>{

    const {email,password} =req.body

   try {
     if(email === process.env.ADMIN_EMAIL && password ===process.env.ADMIN_PASSWORD){
        const token =jwt.sign(email+password,process.env.JWT_SECRET);
        res.json({success:true,token})
    }
    else{
        res.json({success:false,message:"Invalid credentials"})
    }

    
   } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message});
    
   }
}

export {loginUser,registerUser,adminLogin};