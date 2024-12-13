import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testmonials = () => {
  return (
    <div className='contasiner mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testmonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customber 
        <span className='underline underline-offset-4 decoration-1 under font-light'> Testmonials</span></h1>
      <p className='text-center text-gray-500 mb-12 mx-w-80 mx-auto'>Feal Stories from Those who Found Home with Us</p>
   
   <div className="flex gap-8 flex-wrap  justify-center">
    {testimonialsData.map((testmonial,index) =>(
        <div key={index} className='max-w-[314px] border shadow-lg rounded px-8 py-12 text-center' >
 <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testmonial.image} alt={testmonial.alt} />
 <h2 className='text-xl text-gray-700 font-medium'>{testmonial.name}</h2>
 <p className='text-gray-500 text-sm mb-4'>{testmonial.title}</p>
 <div className='flex justify-center text-[#ff7200] gap-1 mb-4'>
      {Array.from({length:testmonial.rating},(item,index)=>(
        <img key={index} src={assets.star_icon} alt="" />
      ))}
 </div>
 <p className='text-gray-600'>{testmonial.text}</p>
        </div>))}
   </div>
   
    </div>
  )
}

export default Testmonials
