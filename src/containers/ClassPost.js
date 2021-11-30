import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import  Navigation from '../components/Class/Navigation'
import {useParams} from 'react-router-dom'

function ClassPost(){

    return(
      <React.Fragment>

      <div className="" id="left">
        <Navigation />
      </div>

      <div className="" id="middle">
      <Outlet />
      </div>


  </React.Fragment>
)
}

export default ClassPost;