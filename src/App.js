import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Routes, Navig } from 'react-router-dom'
import Homepage from './containers/Homepage'
import Classfeed from './containers/Classfeed'
import Layout from './layouts/Layout'
import AuthPage from './containers/AuthPage'
import ClassCard from './components/Home/ClassCard'
import { isLoggedIn } from './services/actions/api_auth'

function App() {

  if(!isLoggedIn()){
    return <AuthPage />
  }

    return (

        <Routes>
    
        

          <Route path="/"
                element={<div className="ml-80"> <Homepage/> </div>}
          />
        </Routes>
    

    
    );
}


export default App;
