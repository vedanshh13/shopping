
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo}  className="mb-5 w-32" alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis possimus vitae delectus quam molestiae autem facere debitis repellendus asperiores.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>HOME</li>
                    <li>Abou us</li>
                    <li>Delivery</li>
                    <li> Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>+1-212-456-7890</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>

         </div>
         <div>
            <hr />
            <p className='py-5 text-sm text-center'> Copyright 2024@ forever.com -All Right Resereved</p>
         </div>
    </div>
  )
}

export default Footer