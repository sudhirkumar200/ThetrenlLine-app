import React from "react";
import Banner from "./component/Banner";
import Experts from "./component/Experts";
import News from "./component/News";
import Cards from "./component/Cards";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './component/Home';
import HeroPage from "./component/HeroPage";
import UserRegister from './component/UserRegister'
import Login from './component/Login';

const App = () => {
  return (
    <>
      <div className="px-16">
        <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<UserRegister/>}/>
        <Route path="/home" element={<Home/>}/>         
         <Route element={<Home/>} path="/" />
         <Route element={<News/>} path="/news" />
         <Route element={<Experts/>} path="/experts" />
         <Route element={<HeroPage/>} path="/hero" /> 
         <Route element={<UserRegister/>} path="/register" /> 
         <Route element={<Login/>} path="/login"/>  
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
