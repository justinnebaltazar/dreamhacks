import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { About } from './components/About/About';

function App() {

  return ( 
    <BrowserRouter>
    <div>
      <Routes>
        {/* home page */}
        <Route path="/" element={
          <>
            <Navbar/>
            <About/>
          </>
        }
        />

        {/* login page */}
        <Route path="/login" element={
          <>
            <LoginPage/>
          </>
        }
        />

        {/* register page */}
        <Route path="/register" element={
          <>
            <RegisterPage/>
          </>
        }/>
        
      </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App
