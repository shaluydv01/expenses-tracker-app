import React, { useState } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Help from "./pages/Help/Help";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import User from "./pages/User/User";
import Record from "./Components/RecordItem/Record";


const App = () => {

  const [item, setItem] = useState([{
    id: Math.random(),
    fill1: 'January',
    amount1: 3000,
    fill2: 'January',
    amount2: 3000,
    total: "Total",
    Rs: ""
    
    // fun: function (){
    //   return (amount1 + amount2);
    // }
}]
);
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login/sign-up" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/help" element={<Help />} />
          <Route path="/user" element={<User />} />
          <Route path="/record" element={<Record item={item} />}></Route>
