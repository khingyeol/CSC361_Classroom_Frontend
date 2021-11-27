import React from 'react';
import '../index.css';
import Header from '../components/main/Header';
import ClassCard from '../components/Home/ClassCard';
import Layout from '../layouts/Layout';
import Navigation from '../components/main/Navigation';

function Homepage(){
    return(
        <React.Fragment>
        <div className="">
            <div className="w-72  navbar shadow-lg" ><Navigation /></div>
        </div>
        <div className="ml-80 mr-10" >
            <ClassCard />             
        </div>
    </React.Fragment>
    );
}

export default Homepage;