import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'
import Classfeed from './containers/Classfeed'
import AuthPage from './containers/AuthPage'
import ClassCard from './components/Home/ClassCard'
import AsmCard from './components/Home/AsmCard'
import ClassContent from './containers/ClassContent'
import Homepage from './containers/Homepage'
import ASMContent from './containers/ASMContent'
import AuthCard from './components/Auth/AuthCard'
import RegisCard from './components/Auth/RegisCard'

const AppWithRouter = () => (
  <BrowserRouter>
    <Routes>
            
            {/* main route */}
      <Route path="/" element={<App />}>

          <Route path="/" element={<Homepage />}>
            <Route path="/" element={<ClassCard />} />
            <Route path="/assignments" element={<AsmCard />}></Route>
          </Route>
          
          <Route path="/:classid" element={<Classfeed />}>
            <Route path="/:classid/" element={<ClassContent />}></Route>
            <Route path="/:classid/assignment" element={<ASMContent />}>eee</Route>
        </Route>
        
      </Route>
        
      {/* <Route lement={<AuthPage />}>
            <Route path="/login" element={<AuthCard />} />
            <Route path="/register" element={<RegisCard />} />
      </Route> */}

              {/* class route */}


    </Routes>
      
  </BrowserRouter>

)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))

reportWebVitals()
