import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'
import Classfeed from './containers/Classfeed'
import AuthCard from './components/Auth/AuthCard'
import ClassCard from './components/Home/ClassCard'
import AsmCard from './components/Home/AsmCard'
import ClassContent from './containers/ClassContent'

const AppWithRouter = () => (
  <BrowserRouter>
    <Routes>
            
            {/* main route */}
      <Route path="/" element={<App />}>
          <Route path="/" element={<ClassCard/>}>
              {/* <Route path=":classid" element={<ClassCard />}></Route> */}
          </Route>
          
          <Route path="/assignments" element={
          <AsmCard />
          }>
          
          </Route>

        
      </Route>
        
              {/* class route */}
      <Route path="/:classid" element={<Classfeed />}>
        <Route path="/:classid/" element={<ClassContent />}></Route>
        <Route path="/:classid/assignment" element={<AsmCard />}></Route>
      </Route>

    </Routes>
      
  </BrowserRouter>

)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))

reportWebVitals()
