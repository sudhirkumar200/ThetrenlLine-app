import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-white  px-0 padding ">
        <div className="px-1 m-1  rounded ">
          <div className="max-w-[1240px] py-[10px] mx-auto items-center flex justify-between">
            <div className="px-0 text-3xl font-bold hover:scale-110 duration-[400ms]">
              <NavLink to="/">TheTrendLine</NavLink>
            </div>
            {toggle ? (
              <AiOutlineClose
                onClick={() => setToggle(!toggle)}
                className="text-blue text-2xl
                md:hidden block"
              />
            ) : (
              <AiOutlineMenu
                onClick={() => setToggle(!toggle)}
                className="text-blue text-2xl
                 md:hidden block"
              />
            )}
            <div className="hidden md:flex items-center space-x-6 text-black-[500] font-bold ml-auto">
              <div className="hover:scale-110 duration-[400ms]">
                <NavLink to="/hero">Hero</NavLink>
              </div>
              <div className="hover:scale-110 duration-[400ms]">
                <NavLink to="/news">News</NavLink>
              </div>
              <div className="hover:scale-110 duration-[400ms]">
                <NavLink to="/experts">Experts</NavLink>
              </div>
              <div className="hover:scale-110 duration-[400ms]">
                <NavLink
                  className="border border-black bg-blue-100 rounded p-1"
                  to="/about"
                >
                  Get Started
                </NavLink>
              </div>
            </div>

            {/* <ul className="hidden md:flex text-black-[500] gap-10 font-bold  ">
              <li className="hover:scale-110 duration-[400ms]">
                <NavLink to="/hero">Hero</NavLink>
              </li>
              <li className="hover:scale-110 duration-[400ms]">
                <NavLink to="/news">News</NavLink>
              </li>
              <li className="hover:scale-110 duration-[400ms]">
                <NavLink to="/experts">Experts</NavLink>
              </li>
              <li className="hover:scale-110 duration-[400ms]">
                <NavLink
                  className="border border-black bg-blue-100 rounded p-1"
                  to="/about"
                >
                  Gets Started
                </NavLink>
              </li>
            </ul> */}
            {/*Responsive*/}
            {/* <ul className={`duration-300 md:hidden text-white fixed w-full h-screen bg-black left-0 top-[92px] 
              ${toggle ? 'left-[0]' : 'left-[-100%]'}
               `}>
               <li className='hover:scale-110 duration-[400ms]'>
                <NavLink to="/hero">
                  Hero
                  </NavLink>  
                </li>
                <li className='hover:scale-110 duration-[400ms]'>
                <NavLink to="/news">
                  News
                  </NavLink>
                </li>
                <li className='hover:scale-110 duration-[400ms]'>
                <NavLink to="/experts">
                  Experts
                  </NavLink>
                </li>
                <li className='hover:scale-110 duration-[400ms]'>
                <NavLink to="/about">
                Gets Started
                  </NavLink>
                </li>
            </ul> */}
            <div className="  ">
              {/* <ul
              className={`  shadow duration-300 md:hidden text-blue-800 bg-white bg-opacity-100 fixed w-[50%] h-screen left-0 top-[0px] ${
                toggle ? "left-0" : "left-[-100%]"
              } transition-transform ease-in-out`}
            >
              <li className="hover:scale-110 duration-[400ms]">
                <NavLink
                  to="/hero"
                  className="block px-4 py-2 text-lg text-blue-800 hover:bg-blue-100"
                >
                  Hero
                </NavLink>
              </li>
              <li className="hover:scale-110 duration-[400ms]">
                <NavLink
                  to="/news"
                  className="block px-4 py-2 text-lg text-blue-800 hover:bg-blue-100"
                >
                  News
                </NavLink>
              </li>
              <li className="hover:scale-110 duration-[400ms]">
                <NavLink
                  to="/experts"
                  className="block px-4 py-2 text-lg text-blue-800 hover:bg-blue-100"
                >
                  Experts
                </NavLink>
              </li>
              <li className="hover:scale-110 duration-[400ms]">
                <NavLink
                  to="/about"
                  className="block px-4 py-2 text-lg text-blue-800 hover:bg-blue-100"
                >
                  Get Started
                </NavLink>
              </li>
            </ul> */}

              <div
                className={`py-12 duration-300 md:hidden text-blue-800 bg-white bg-opacity-95 fixed w-[50%] h-screen left-0 top-[0px] ${
                  toggle ? "left-0" : "left-[-100%]"
                } transition-transform ease-in-out`}
              >
                <div className="hover:scale-110 duration-[400ms]">
                  <NavLink
                    to="/hero"
                    className="block px-4 py-2 text-lg text-blue-800 hover:bg-blue-100"
                  >
                    Hero
                  </NavLink>
                </div>
                <div className="hover:scale-110 duration-[400ms]">
                  <NavLink
                    to="/news"
                    className="block px-4 py-2 text-lg text-blue-800 hover:bg-blue-100"
                  >
                    News
                  </NavLink>
                </div>
                <div className="hover:scale-110 duration-[400ms]">
                  <NavLink
                    to="/experts"
                    className="block px-4 py-2 text-lg text-blue-800 hover:bg-blue-100"
                  >
                    Experts
                  </NavLink>
                </div>
                <div className="hover:scale-110 duration-[400ms]">
                  <NavLink
                    to="/about"
                    className="block px-4 py-2 text-lg text-blue-800 hover:bg-blue-100"
                  >
                    Get Started
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="shadow" />
      </div>
    </>
  );
};

export default Header;
