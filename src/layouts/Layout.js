import React from 'react';
import Header from '../components/main/Header';
import Navigation from '../components/main/Navigation';
import ClassCard from '../components/Home/ClassCard';
import AuthCard from '../components/Auth/AuthCard'

const Layout = () => {
    return (
    <React.Fragment>
        <Header />
        <div className="">
            <div className="w-72  navbar shadow-lg" ><Navigation /></div>
        </div>
        <div className="ml-80">
            {/* <ClassCard /> 
            <AuthCard /> */}
        </div>
    </React.Fragment>
    );
};
export default Layout;