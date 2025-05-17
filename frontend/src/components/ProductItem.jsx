import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            {/* img ka array hoga 4 img isliye 0 lagaya hai  */}
            <img src={image[0]} className='hover:scale-110 transition ease-in-out' alt="" /> 
            
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>

        
    </Link>
  )
}

export default ProductItem