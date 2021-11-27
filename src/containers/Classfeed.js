import React from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import  Navigation from '../components/Class/Navigation'
import Header from '../components/Class/Header';
import AsmCard from '../components/Home/AsmCard';
import ClassDetail from '../components/Class/ClassDetail';
import TodoBox from '../components/Class/TodoBox';
import PostBox from '../components/Class/PostBox';

function Classfeed(){
    return(
      <React.Fragment>
        <Header />

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
            <TodoBox />
            <TodoBox />
            </div>
        </div>

      </div>


  </React.Fragment>
)
}

export default Classfeed;