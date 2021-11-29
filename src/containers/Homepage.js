import React from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import Header from '../components/main/Header';
import ClassCard from '../components/Home/ClassCard';
import Layout from '../layouts/Layout';
import Navigation from '../components/main/Navigation';

function Homepage(){
    return(
        <React.Fragment>
        <div className="">
            <div className="w-72  navbar shadow-lg" >
                <Navigation />
            </div>

            <div className='ml-80 mr-10'>
                <div className='inline-grid grid-cols-3 gap-x-4 gap-y-4 '>
                    <Outlet />
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Homepage;