import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import  Navigation from '../components/Class/Navigation'
import Header from '../components/Class/Header';
import AsmCard from '../components/Home/AsmCard';
import ClassDetail from '../components/Class/ClassDetail';
import TodoBox from '../components/Class/TodoBox';
import {useParams} from 'react-router-dom'
import { getTodo } from '../services/actions/api_class';
import { isLoggedIn } from '../services/actions/api_auth'
import App from '../App'

function Classfeed(){
  const { classid } = useParams();
  const [ASMlist, setASMlist] = useState([])
  const [inputs, setInputs] = useState({class_code: classid})

    
    useEffect( async () => {
      const res = await getTodo(inputs);
      if (res.data.result = 'OK') {
          setASMlist(res.data.data)
      }
      else {
          setASMlist([])
      }    
  
  }, []);  
  
    const todolist = ASMlist.map((item) =>
      <TodoBox data={ASMlist} />
    )


    return(
      <React.Fragment>
        {/* <Header /> */}

      <div className="" id="left">
        <Navigation />
          {/* <div className="w-72  navbar shadow-lg" ><Navigation /></div> */}
      </div>

      <div className="" id="middle">
      <Outlet />
      {/* <Routes>
        <Route path="/class/assignment" element={<AsmCard />}>eeeee</Route> 
        <Route path="/exam"></Route>
      </Routes> */}
      </div>

      <div className="space-y-5" id="right">
        <ClassDetail />

        <div className="container4">
            <div className="box px-5 divide-y divide-grey divide-opacity-10 overflow-auto" style={{width: '340px',height: '200px'}}>
            {todolist}
            </div>
        </div>

      </div>


  </React.Fragment>
)
}

export default Classfeed;