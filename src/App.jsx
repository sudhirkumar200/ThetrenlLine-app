import React from "react";
import Banner from "./component/Home/Banner";
import Experts from "./component/Home/Experts";
import News from "./component/Home/News";
import Cards from "./component/Home/Cards";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './component/Home/Home';
import HeroPage from "./component/Home/HeroPage";
import UserRegister from './component/SignUp/UserRegister'
import Register from './component/SignUp/SignUp'
import Login from './component/Login/Login';
import LoginOtp from './component/Login/LoginOtp';
import Otp from './component/Login/Otp';
import Header from "./component/Home/Header";


const App = () => {
  return (
    <>
      <div className="px-16">
        
        <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/sendotp" element={<LoginOtp/>}/>
        <Route path="/user/otp" element={<Otp/>}/>
        <Route element={<Login/>} path="/login"/> 
        <Route path="/signup" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>         
         <Route element={<Home/>} path="/" />
         <Route element={<News/>} path="/news" />
         <Route element={<Experts/>} path="/experts" />
         <Route element={<HeroPage/>} path="/hero" /> 
         <Route element={<UserRegister/>} path="/register" /> 
          
        </Routes>
        {/* <Router>
          <Link to ="">Home</Link>
          <Link to ="/banner">Banner</Link>
          <Link to ="/experts">Experts</Link>
          <Link to ="/news">News</Link>
         
        </Router> */}
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
