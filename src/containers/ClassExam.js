import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import Navigation from '../components/Exam/Navigation';
import {useParams} from 'react-router-dom'
import { jwtAuth } from '../services/actions/api_auth';

function ClassExam(){
  const { classid } = useParams();
  const { id } = useParams();

  const [content, setContent] = useState([])
  const [role, setRole] = useState('')

  useEffect( async () => {
    const res = await jwtAuth();
      setContent(res.data)
      res.data[0].class.map(item => {
        console.log('role',item)
  
        if (item.class_code === classid) {
          setRole(item.role)
        }
      });

  }, []);
    return(
      <React.Fragment>

      <div className="" id="left">
        <Navigation />
      </div>

      <div className="" id="middle">
      {
        role == 'teacher' ?
        <Link to={`/${classid}/exam/create`}><button className="box p-3 shadow-lg">create exam</button> </Link>
        : role == 'student' ? '' : ''
      }

      <div></div>
      <Outlet data={role} />
      {console.log('roleeee',role)}
      </div>

      <div className="space-y-5" id="right">
        {/* <ClassDetail /> */}

        <div className="container4">
          {
            !id == '' ? <div className="box px-5 divide-y divide-grey divide-opacity-10 overflow-auto" style={{width: '340px',height: '200px'}}></div>
            : ''
          }
        </div>

      </div>


  </React.Fragment>
)
}

export default ClassExam;