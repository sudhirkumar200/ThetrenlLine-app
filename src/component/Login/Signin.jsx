import React, { useState } from 'react'
// Example import for react-toastify
import { ToastContainer, toast } from "react-toastify";
import {userVerify} from "../Apis/Apis";
// import {useNavigate} from "react-router-dom"
import "../../style/mix.css"
import { NavLink, useNavigate } from "react-router-dom";


const Signin = () => {

  const [passhow,setPassShow] = useState(false);

  const [inputdata,setInputdata] = useState({
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
    const {email,password} = inputdata;

    if(email === ""){
      toast.error("Enter Your Email")
    }else if(!email.includes("@")){
      toast.error("Enter Valid Email")
    }else if(password === ""){
      toast.error("Enter Your Password")
    }else if(password.length < 6){
      toast.error("password length minimum 6 character")
    }else{
      const response = await userVerify(inputdata);
      
      if(response.status === 200){
        setInputdata({...inputdata,email:"",password:""});
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
            <h1>Sign In</h1>
            <p style={{textAlign:"center"}}>As a stock market enthusiast, we're delighted that you'll be utilizing Project Cloud to organize your tasks. 
            We trust you'll discover it to be a valuable tool!</p>
          </div>
          <form>
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
            <button className='btn' onClick={handleSubmit}>Sign In</button>
            <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{" "}
          <NavLink to="/signup" className="text-blue-700">
            Sign Up
          </NavLink>
        </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Signin











// import { NavLink } from "react-router-dom";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { userVerify } from "../Apis/Apis";

// export default function Signin() {
//   const [inputdata, setInputdata] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputdata({ ...inputdata, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = inputdata;

//     if (email === "") {
//       toast.error("Enter Your Email");
//       return;
//     } else if (!email.includes("@")) {
//       toast.error("Enter a Valid Email");
//       return;
//     } else if (password === "") {
//       toast.error("Enter Your Password");
//       return;
//     } else if (password.length < 6) {
//       toast.error("Password length must be at least 6 characters");
//       return;
//     }
//     try {
//       const response = await userVerify({
//         email,
//         password,
//       });
//       if (response.status === 200) {
//         localStorage.setItem("userdbtoken", response.data.userToken);
//         toast.success(response.data.message);
//         setTimeout(() => {
//           navigate("/");
//         }, 5000);
//       } else {
//         toast.error(response.data.error || "Login failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("An error occurred while logging in.");
//     }
//   };

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form
//             className="space-y-6"
//             onSubmit={handleSubmit}
//           >
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   placeholder="Enter your registered Email"
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   onChange={handleChange}
//                   className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <p className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     <NavLink to="/sendotp">Forgot password?</NavLink>
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   placeholder="Enter your Password"
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   onChange={handleChange}
//                   className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?{" "}
//             <NavLink to="/signup" className="text-blue-700">
//               Get Started
//             </NavLink>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
