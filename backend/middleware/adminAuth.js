// using for admin authentication 

import jwt from 'jsonwebtoken'
import 'dotenv/config';


const adminAuth = async (req ,res , next)=> {
    console.log("testing list 1")

    try {
        console.log("mai yaha hu3");
        const {token} =req.headers
        if(!token){
            return res.json({success:false,message:"NOt AUTHorized Login Again"});
        }
        const token_decode=jwt.verify(token,process.env.JWT_SECRET);
        if(token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"NOt AUTHorized Login Again"});
        }
        next()
        console.log("mai yaha hu2");

    } catch (error) {
        console.log("jai mata di")
        res.json({success:false,message:"jai mata di"})

        
    }
}

export default adminAuth;