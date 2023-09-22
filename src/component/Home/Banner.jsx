import React from 'react'
import Typed from 'react-typed';
import Header from './Header';

const Banner = () => {
  return (
    <>
    
    <div className= ' px-0 bg-white w-full  py-[50px] '>
        <div className=' p-2' >
        <div className='max-w-[1240px] mx-auto text-center font-bold'>
            <div className='text-3xl md:text-3xl md:p-[24px] '>
                Learn With Us
            </div>
            <h2 className='text-blue-800 text-3xl md:text-[80px] md:p-[24px]'>Grow with us.</h2>
            <div className='text-[20px] text-blue-400 md:text-[40px] md:p-[24px]'>
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
    <hr className='shadow'/>
    </div>
    </>
  )
}

export default Banner;

