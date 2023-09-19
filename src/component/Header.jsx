import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <>
    <div className='bg-slate-300  p-2 '>
        <div className='max-w-[1240px] py-[10px] mx-auto items-center flex justify-between'>
            <div className='text-3xl font-bold hover:scale-110 duration-[400ms]'>
               TheTrendLine
            </div>
            {
                toggle ? 
                <AiOutlineClose onClick={()=> setToggle(!toggle)} className='text-white text-2xl
                md:hidden block'/>
                :
                <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl
                 md:hidden block'/>

            }            
            <ul className='hidden md:flex text-black-[500] gap-10 font-bold  '>
                <li className='hover:scale-110 duration-[400ms]'>
                    Home
                </li>
                <li className='hover:scale-110 duration-[400ms]'>
                    Products
                </li>
                <li className='hover:scale-110 duration-[400ms]'>
                    Services
                </li>
                <li className='hover:scale-110 duration-[400ms]'>
                    About Us
                </li>
            </ul>
            {/*Responsive*/}
            <ul className={`duration-300 md:hidden text-white fixed w-full h-screen bg-black left-0 top-[92px] 
              ${toggle ? 'left-[0]' : 'left-[-100%]'}
               `}>
                <li className='p-3 hover:scale-110 duration-[400ms]'>
                    Home
                </li>
                <li className='p-3 hover:scale-110 duration-[400ms]'>
                    Products
                </li>
                <li className='p-3 hover:scale-110 duration-[400ms]'>
                    Services
                </li>
                <li className='p-3 hover:scale-110 duration-[400ms]'>
                    About Us
                </li>
            </ul>
        </div>      
    </div>
    </>
  )
}

export default Header;
