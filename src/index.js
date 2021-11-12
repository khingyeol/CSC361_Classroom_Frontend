import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'
import Homepage from './containers/Homepage'
import Classfeed from './containers/Classfeed'
import Layout from './layouts/Layout'
import AuthPage from './containers/AuthPage'
import ClassCard from './components/Home/ClassCard'

const AppWithRouter = () => (
  <BrowserRouter>
      <App />
  </BrowserRouter>

)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))

reportWebVitals()
