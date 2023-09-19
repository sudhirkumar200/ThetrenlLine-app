import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-blue-400 w-full  py-[50px]'>
        <div className='max-w-[1240px] mx-auto text-center font-bold'>
            <div className='text-3xl md:text-3xl md:p-[24px] '>
                Learn With Us
            </div>
            <h2 className='text-white text-3xl md:text-[80px] md:p-[24px]'>Grow with us.</h2>
            <div className='text-[20px] text-white md:text-[40px] md:p-[24px]'>
                <Typed
                className='pl-3'
                    strings={['The future starts today, not tomorrow']}
                    typeSpeed={40}
                    loop={true}
                    backSpeed={100}
                />
            </div>  
            <button className='bg-black text-white p-3 rounded hover:scale-110 duration-[400ms]'>Get Started</button>
        </div>      
    </div>
  )
}

export default Banner;

