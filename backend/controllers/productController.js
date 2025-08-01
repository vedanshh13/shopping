import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js';
// function for add product 
const addProduct =async (req ,res) =>{
try {
    const {name,description,price,category,subcategory,sizes,bestseller}=req.body;
    const image1= req.files.image1 && req.files.image1[0];
    const image2= req.files.image2 && req.files.image2[0];
    const image3= req.files.image3 && req.files.image3[0];
    const image4= req.files.image4 && req.files.image4[0];

    const images =[image1,image2,image3,image4].filter((item)=> item !==undefined) ;

    // uploading on cloudinary 

    let imagesUrl = await Promise.all(
        images.map(async (item)=>{
            let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
            return result.secure_url;
        })
    )

   const productData ={
    name,
    description,
    category,
    price:Number(price),
    subcategory,
    bestseller: bestseller==="true" ? true : false,
    sizes:JSON.parse(sizes),
    image:imagesUrl,
    date:Date.now()

   }
   const product = new productModel (productData);
   await product.save()
    return res.json({success:true,message:"Product adeed succesfully"})

} catch (error) {
    console.log(error);
    return res.json({
        success:false,
        message:"error while adding product"
    })
    
}
  

}
// function fro list product 
const listProducts =async (req ,res) =>{

    try {
     console.log("i m here");
    const products = await productModel.find({});
    res.json({success:true,products});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"can not get product"})
    }

}
// fun for removing product 

const removeProduct =async (req,res) =>{

    try {
     
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"product removed"})

    } catch (error) {
           console.log(error);
        res.json({success:false,message:"can not get product"})
    }

}
// single forduct function 

const singleProduct =async (req ,res) =>{

    try {
        const {productId}=req.body
        const product = await productModel.findById(productId);
        res.json({success:true,product})

        
    } catch (error) {

          console.log(error);
        res.json({success:false,message:"can not get product"})
        
    }

}

export {listProducts,addProduct,removeProduct,singleProduct}