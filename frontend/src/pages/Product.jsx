import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {
const {productId}=useParams();
const {products,currency,addToCart,cartItems}=useContext(ShopContext);
const[productData,setProductData]=useState(false);
const [image,setImage]=useState('');
const [size,setSize]=useState("");

const fetchProductData =async () =>{
products.map((item)=>{
    if(item._id===productId){
        setProductData(item)
        setImage(item.image[0]);
        return null;
        // null to stop execution thats why i think it is async ??? check more 
    }
})

}
useEffect(()=>{
fetchProductData();
},[productId,products])


  return productData ? (
    <div  className='border-t-2 pt-10 transition-opacity ease-in duration-500 opactiy-100'>
        {/* Product data */ }
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
             {/* product mages */}
             <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                    {
                        productData.image.map((item,index)=>{
                         return ( <img onClick={()=>setImage(item)} src={item} key={index}  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>)

                        })
                    }
                </div>
                <div className='w-full sm:w-[80%]'>
                    <img className="w-full h-auto " src={image} alt="" />
                </div>
             </div>

             {/* Product information */}
             <div className='flex-1' >
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex item-center gap-1 mt-2' >
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                    <p className='pl-2'>(122)</p>

                </div>
                <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                    <p>Select Size </p>
                    <div className='flex gap-2'>
                        {
                            productData.sizes.map((item,index)=>(
                                <button  onClick={()=>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item==size ? 'border-orange-500' :""}`}>{item}</button>
                            ))
                        }
                    </div>

                </div>
                <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                  <hr  className='mt-8 sm:w-4/5'/>
                  <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% Original product</p>
                    <p>Cash on delivery is avilable on this product</p>
                    <p>Easy return and Exchange policy within 7 days.</p>
                  </div>
             </div>
        </div>
        {/* -------Description and review section ----------------*/ }
        <div className='mt-20'>
            <div className='flex'>
                <b className='border px-5 py-3 text-sm border-b-0'>Description</b>
                <p className=' border px-5 py-3 text-sm border-l-0 border-b-0'> Reviews(122)</p>

            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ratione fugit odio distinctio facere eveniet nisi, excepturi quam facilis, amet iure exercitationem aperiam tempore a quae ex eaque ipsa reiciendis laborum iusto laudantium praesentium saepe. Maiores soluta necessitatibus odit ipsum. Voluptatum ipsam esse ab mollitia et vitae quam officia a vel minus magnam officiis, inventore ducimus iste. Consequuntur, facilis nulla.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab veniam voluptas accusamus natus placeat, libero deserunt quo, tempora numquam at ratione delectus quos, quas in vitae temporibus est perspiciatis obcaecati. Veritatis minima dolorum itaque?</p>

            </div>

        </div>

        {/* Display related product  */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

             
    </div>
  ): <div className='opacity-0'></div>
}

export default Product