import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerfunction } from "../Apis/Apis";
// Example import for react-toastify
import { ToastContainer, toast } from "react-toastify";

export default function UserRegister() {
  const [passhow, setPassShow] = useState(false);
  const [inputdata, setInputdata] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, email, password } = inputdata;

    if (!fname || !lname || !email || !password) {
      toast.error("All fields are required.");
    } else if (!email.includes("@")) {
      toast.error("Enter a valid email address.");
    } else if (password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
    } else {
      const response = await registerfunction(inputdata);
      console.log("response", response); //user response

      if (response.status === 200) {
        setInputdata({ fname: "", lname: "", email: "", password: "" });
        navigate("/");
      } else {
        toast.error(response.response.data.error);
      }
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up New User
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter Your First Name"
                name="fname"
                type="text"
                autoComplete="name"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter Your Last Name"
                name="lname"
                type="text"
                autoComplete="name"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter Your Email-id"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                placeholder="Enter a strong password"
                id="password"
                name="password"
                type={passhow ? "text" : "password"}
                autoComplete="current-password"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div
                className="showpass cursor-pointer"
                onClick={() => setPassShow(!passhow)}
              >
                {passhow ? "Hide" : "Show"}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <NavLink to="/login" className="text-blue-700">
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { registerfunction } from "./Apis/Apis";
// import { ToastContainer, toast } from "react-toastify";

// // export default function UserRegister() {
// //   const history=useNavigate();

// //   const [fname,setFName ]=useState('')
// //   const [lname,setLName ]=useState('')
// //   const [email,setEmail ]=useState('')
// //   const [password,setPassword ]=useState('')

// //    async function   handleSubmit (e){
// //     e.preventDefault();
// //         try{
// //               await axios.post("http://localhost:8000/user/signup",{
// //               fname,lname,email,password
// //             })
// //             .then(res=>{
// //                 if(res.data=="exist"){
// //                     alert("User already exists")
// //                 }
// //                 else if(res.data=="notexist"){
// //                     history("/home",{state:{id:email}})
// //                 }
// //             })
// //             .catch(e=>{
// //                 alert("wrong details")
// //                 console.log(e);
// //             })

// //         }
// //         catch(e){
// //             console.log(e);

// //         }

// //     }

// export default function UserRegister() {
//   // const [fname, setFName] = useState("");
//   // const [lname, setLName] = useState("");
//   // const [email, setEmail] = useState("");
//   //const [password, setPassword] = useState("");

//   const [passhow, setPassShow] = useState(false);

//   const [inputdata, setInputdata] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // setinputvalue
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputdata({ ...inputdata, [name]: value });
//   };

//   // register data
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { fname, lname, email, password } = inputdata;

//     if (fname === "") {
//       toast.error("Enter Your First Name");
//     } else if (lname === "") {
//       toast.error("Enter Your Last Name");
//     } else if (email === "") {
//       toast.error("Enter Your Email");
//     } else if (!email.includes("@")) {
//       toast.error("Enter Valid Email");
//     } else if (password === "") {
//       toast.error("Enter Your Password");
//     } else if (password.length < 6) {
//       toast.error("password length minimum 6 character");
//     } else {
//       const response = await registerfunction(inputdata);

//       if (response.status === 200) {
//         setInputdata({
//           ...inputdata,
//           fname: "",
//           lname: "",
//           email: "",
//           password: "",
//         });
//         navigate("/");
//       } else {
//         toast.error(response.response.data.error);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign Up New User
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form
//             className="space-y-6"
//             action="/signup"
//             method="POST"
//             //onSubmit={handleSubmit}
//           >
//             <div>
//               <label
//                 htmlFor="fname"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 First Name
//               </label>
//               <div className="mt-2">
//                 <input
//                   placeholder="Enter Your First Name"
//                   name="fname"
//                   type="test"
//                   autoComplete="name"
//                   required
//                   onChange={handleChange}
//                   className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div>
//               <label
//                 htmlFor="lname"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Last Name
//               </label>
//               <div className="mt-2">
//                 <input
//                   placeholder="Enter Your Last Name"
//                   name="lname"
//                   type="test"
//                   autoComplete="name"
//                   required
//                   onChange={handleChange}
//                   className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   placeholder="Enter Your Email-id"
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
//               </div>
//               <div className="mt-2">
//                 <input
//                   placeholder="Enter a strong password"
//                   id="password"
//                   name="password"
//                   type={!passhow ? "password" : "text"}
//                   autoComplete="current-password"
//                   required
//                   // onChange={(e) => setPassword(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
// {/* <input type={!passhow ? "password" : "text"} name="password" id=""  onChange={handleChange}  placeholder='Enter Your password' /> */}
//               <div className='showpass' onClick={()=>setPassShow(!passhow)} >
//               {!passhow ? "" : ""}
//               </div>

//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Already member?{" "}
//             <NavLink to="/login" className="text-blue-700">
//               Sign In
//             </NavLink>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
