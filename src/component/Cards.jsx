import React from 'react'

const Cards = () => {
  return (
    <div className='py-[50px] px-2'>
        <div className='max-w-[1240px] mx-auto  md:grid grid-cols-3 gap-6'>
            <div className='shadow-xl border my-4  h-[350px] bg-gray-100 hover:scale-105 duration-[400ms]'>1 Div</div>
            <div className='shadow-xl border my-4 h-[350px] bg-gray-300 hover:scale-105 duration-[400ms]'>2 Div</div>
            <div className='shadow-xl border my-4 h-[350px] bg-gray-400 hover:scale-105 duration-[400ms]'>3 Div</div>
        </div>
        <hr className='shadow'/>
    </div>
  )
}

export default Cards;
