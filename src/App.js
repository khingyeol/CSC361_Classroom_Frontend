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
    return ( 
    <AuthPage />
    );
  }

    return (
      <div className=''>
        <div className='modal'>
        <Header />

        </div>
        <div>
          <Outlet />
        </div>  
        </div>
    );
}


export default App;
