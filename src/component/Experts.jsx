import React from "react";
import Laptop from "../assets/img/project.jpg";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Experts = () => {
  return (
    <>
       
    <div className="w-full bg-white py-16 px-0">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="hover:scale-110 duration-[400ms] w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">LEARN FROM EXPERTS</p>
          <p>
            Learning from experts in a project is crucial for accelerated
            learning, problem-solving, innovation, networking, quality
            assurance, motivation, and credibility. Their guidance and
            experience can significantly enhance project outcomes and personal
            growth.
          </p>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-110 duration-[400ms]">
           <NavLink to="/hero">
           Get Started
           </NavLink>           
          </button>
        </div>
      </div>
      <hr className='shadow'/>
    </div>
    </>
  );
};

export default Experts;
