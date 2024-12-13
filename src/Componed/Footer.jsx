import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden ' id='Footer'>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className='w-full md:w-1/3 mb-8 md:mb-0'><img src={assets.logo_dark} alt="" />
        <p className='mt-4 text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dicta
             doloribus ullam culpa eaque, magni commodi totam aliquam debitis
             porro eos optio consectetur repudiandae omnis  tenetur molestias!</p></div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-lg  mb-4 font-bold text-white'>Compny</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About Us</a>
            <a href="#Contact" className='hover:text-white'>Contact Us</a>
            <a href="Privacy-Policy" className='hover:text-white'>Privacy Policy</a>
            </ul>

        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-lg  mb-4 font-bold text-white'>Subscribe to our newsletter</h3>
        <p className='mb-4  max-w-80 text-gray-400'>latest news articles and resource sent  inbox in veekliy</p>
           <div className="">
            <input type="email" placeholder='Enter your email'
            className='p-2 rounded bggary-800 text-gray-300 border border-gray-700 focus:outline-none md:w-auto'/>
          <button className='text-white py-2 px-4 rounded bg-blue-500'>Suscribe</button>
           </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 @allIndia All Right Reseverd
      </div>
    </div>
  )
}

export default Footer
