import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import Navigation from '../components/Exam/Navigation';
import {useParams} from 'react-router-dom'

function ClassExam(){

    return(
      <React.Fragment>

      <div className="" id="left">
        <Navigation />
      </div>

      <div className="" id="middle">
        <Link to="/exam/create"> <button className="box p-3 shadow-lg">create exam</button> </Link>
      <div></div>
      <Outlet />
      </div>

      <div className="space-y-5" id="right">
        {/* <ClassDetail /> */}

        <div className="container4">
            <div className="box px-5 divide-y divide-grey divide-opacity-10 overflow-auto" style={{width: '340px',height: '200px'}}>
            {/* <TodoBox data={ASMlist} />             */}
            </div>
        </div>

      </div>


  </React.Fragment>
)
}

export default ClassExam;