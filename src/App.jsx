import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { About } from './components/About/About';
import HomeWrapper from './components/HomeWrapper/HomeWrapper';
import { NewsFeed } from './components/NewsFeed/NewsFeed';

function App() {

  return ( 
    <BrowserRouter>
    <div>
      <Routes>
        {/* home page */}
        <Route path="/" element={
           <HomeWrapper>
            <Navbar/>
            <About/>
            <NewsFeed/>
          </HomeWrapper>
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
