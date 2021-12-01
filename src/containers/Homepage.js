import React from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import Navigation from '../components/main/Navigation';

function Homepage(){
    return(
        <React.Fragment>
        <div className="">
            <div className="w-72  navbar shadow-lg" >
                <Navigation />
            </div>

            <div className='ml-80 mr-10' id="">
                <div className='flex flex-wrap'>
                    <Outlet className="" />
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Homepage;