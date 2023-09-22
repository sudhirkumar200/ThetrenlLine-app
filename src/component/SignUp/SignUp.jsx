import React, { useState } from 'react'
// Example import for react-toastify
import { ToastContainer, toast } from "react-toastify";
import {registerfunction} from "../Apis/Apis";
// import {useNavigate} from "react-router-dom"
import "../../style/mix.css"
import { NavLink, useNavigate } from "react-router-dom";


const Register = () => {

  const [passhow,setPassShow] = useState(false);

  const [inputdata,setInputdata] = useState({
    fname:"",
    lname:"",
    email:"",
    password:""
  });

  const navigate = useNavigate();
  

  // setinputvalue
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setInputdata({...inputdata,[name]:value})
  }


  // register data
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {fname,lname,email,password} = inputdata;

    if(fname === ""){
      toast.error("Enter Your First Name")
    }else if(lname === ""){
      toast.error("Enter Your Last Name")
    }else if(email === ""){
      toast.error("Enter Your Email")
    }else if(!email.includes("@")){
      toast.error("Enter Valid Email")
    }else if(password === ""){
      toast.error("Enter Your Password")
    }else if(password.length < 6){
      toast.error("password length minimum 6 character")
    }else{
      const response = await registerfunction(inputdata);
      
      if(response.status === 200){
        setInputdata({...inputdata,fname:"",lname:"",email:"",password:""});
        navigate("/")
      }else{
        toast.error(response.response.data.error);
      }
    }
  }


  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{textAlign:"center"}}>As a stock market enthusiast, we're delighted that you'll be utilizing Project Cloud to organize your tasks. 
            We trust you'll discover it to be a valuable tool!</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input type="text" name="fname" id="" onChange={handleChange} placeholder='Enter Your Name' />
            </div>
            <div className="form_input">
              <label htmlFor="lname">Name</label>
              <input type="text" name="lname" id="" onChange={handleChange} placeholder='Enter Your Last Name' />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id=""  onChange={handleChange}  placeholder='Enter Your Email Address' />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className='two'>
              <input type={!passhow ? "password" : "text"} name="password" id=""  onChange={handleChange}  placeholder='Enter Your password' />
              <div className='showpass' onClick={()=>setPassShow(!passhow)} >
              {!passhow ? "Show" : "Hide"}
              </div>
              </div>
            </div>
            <button className='btn' onClick={handleSubmit}>Sign Up</button>
            <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <NavLink to="/sendotp" className="text-blue-700">
            Login With OTP
          </NavLink>
        </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Register