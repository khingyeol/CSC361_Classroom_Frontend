import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import Navigation from '../components/Assignments/Navigation'
import {useParams} from 'react-router-dom'
import Box from '../components/Assignments/Box'
import { jwtAuth } from '../services/actions/api_auth';

// ชนิดตัวแปร ===
// ค่าตรงกันเสยๆ ==
// == คือ Int(0) = String(0)


function ClassAssignment(){

  const { classid } = useParams();
  const { id } = useParams();

  const [content, setContent] = useState([])
  const [role, setRole] = useState('')



  useEffect( async () => {
    const res = await jwtAuth();
    if(res.auth){
      setContent(res.data)
      res.data[0].class.map(item => {    
        if (item.class_code === classid) {
          setRole(item.role)
        }
      });
    

    }else{
      setContent([])
    }
  }, []);

  const card = () =>{
    <div>
      eiei
    </div>
  }

    return(
      <React.Fragment>
      <div className="" id="left">
        <Navigation />
      </div>

      <div className="" id="middle">
        <div>
          { role == 'teacher' ? <Link to={`/${classid}/assignment/create`}><button className="box p-3 shadow-lg">create assignment</button></Link>
          : role == 'student' ? console.log('Im stude',role) : console.log('nothing') }
        </div>
          <Outlet />
      </div>

      <div className="space-y-5" id="right">
        <div className="container4">
          { !id == '' ? <Box /> : '' }
        </div>

      </div>


  </React.Fragment>
)
}

export default ClassAssignment;