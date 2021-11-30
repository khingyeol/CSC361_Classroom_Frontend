import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import Navigation from '../components/Assignments/Navigation'
import {useParams} from 'react-router-dom'
import Content from '../components/Assignments/Content'
function ClassAssignment(){

    return(
      <React.Fragment>

      <div className="" id="left">
        <Navigation />
      </div>

      <div className="" id="middle">
          <Outlet />
      </div>

      {/* <div className="space-y-5" id="right"> */}
        {/* <ClassDetail /> */}

        {/* <div className="container4">
            <div className="box px-5 divide-y divide-grey divide-opacity-10 overflow-auto" style={{width: '340px',height: '200px'}}> */}
            {/* <TodoBox data={ASMlist} />             */}
            {/* </div>
        </div>

      </div> */}


  </React.Fragment>
)
}

export default ClassAssignment;