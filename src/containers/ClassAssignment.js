import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import Navigation from '../components/Assignments/Navigation'
import {useParams} from 'react-router-dom'
import Content from '../components/Assignments/Content'
import Box from '../components/Assignments/Box'
import Header from '../components/Class/Header';
function ClassAssignment(){

    return(
      <React.Fragment>
      <div className="" id="left">
        <Navigation />
      </div>

      <div className="" id="middle">
          <Outlet />
      </div>

      <div className="space-y-5" id="right">
        <div className="container4">
          <Box />
        </div>

      </div>


  </React.Fragment>
)
}

export default ClassAssignment;