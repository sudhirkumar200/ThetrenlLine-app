import React from "react";
import Experts from "./component/Home/Experts";
import News from "./component/Home/News";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './component/Home/Home';
import HeroPage from "./component/Home/HeroPage";
import UserRegister from './component/SignUp/UserRegister'
import Register from './component/SignUp/SignUp'
import Login from './component/Login/Login';
import LoginOtp from './component/Login/LoginOtp';
import Otp from './component/Login/Otp';
import Signin from './component/Login/Signin'




const App = () => {
  return (
    <>
      <div className="px-16">        
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<Register/>}/> 
        <Route path="/sendotp" element={<LoginOtp/>}/>
        <Route path="/user/otp" element={<Otp/>}/> 
        <Route element={<HeroPage/>} path="/hero" />       
        <Route element={<Login/>} path="/login"/> 
        <Route element={<Signin/>} path="/signin"/>    
        <Route element={<News/>} path="/news" />
        <Route element={<Experts/>} path="/experts" />
        <Route element={<UserRegister/>} path="/register" />           
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
