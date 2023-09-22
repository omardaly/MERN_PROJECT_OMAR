import { useState } from 'react'
import Explore from './components/Explore'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import PostAdd from './components/PostAdd';
import Login from './Login';
import Register from './Register';
import Nav from './components/Nav';
import './App.css'

function App() {

  return (
    <>

      <Nav />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Explore />} />
        <Route path="/PostAdd" element={<PostAdd />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />





      </Routes>
    </>
  )
}

export default App
