import React, { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import Homepage from './containers/Homepage'
import AuthPage from './containers/AuthPage'
import ClassCard from './components/Home/ClassCard'
import { isLoggedIn } from './services/actions/api_auth'
import Header from './components/main/Header'
import Navigation from './components/main/Navigation'

function App() {

  if(!isLoggedIn()){
    return <AuthPage />
  }

    return (
      <div>
        <Header />
        <div className="w-72  navbar shadow-lg" >
          <Navigation />
        </div>
        
        <div className='ml-80 mr-10'>
          <div className='inline-grid grid-cols-3 gap-x-4 gap-y-4 '>
            <Outlet />
            </div>
  
         </div>
  
        </div>
    );
}


export default App;
