import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { About } from './components/About/About';
import HomeWrapper from './components/HomeWrapper/HomeWrapper';
import { NewsFeed } from './components/NewsFeed/NewsFeed';
import { ArticleOne } from './components/Articles/Articleone';
import { Question } from './components/Question/Question';
import { ArticleTwo } from './components/Articles/Articletwo';
import { ArticleThree } from './components/Articles/Articlethree';

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
        
        {/* article one - spotlight */}
        <Route path="/article-one" element={
          <>
            <ArticleOne/>
          </>
        }/>

        {/* article two - alarm */}
        <Route path="/article-two" element={
          <>
            <ArticleTwo/>
          </>
        }/>

        {/* article three - alarm */}
        <Route path="/article-three" element={
          <HomeWrapper>
            <ArticleThree/>
          </HomeWrapper>
        }/>

        {/* question page after login */}
        <Route path="/question" element={
          <>
            <Question/>
          </>
        }
        />
      </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App
