// import './App.css'
//import Home from "./component/User/Home"
//import Login from "./component/User/SignIn"
import Signup from "./component/User/SignUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import React, { Component }  from 'react';
import UserRegister from './component/UserRegister'
import Home from './component/Home'
import Login from "./component/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<UserRegister/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;