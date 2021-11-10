import React from 'react';
import Header from '../components/main/Header';
import Navigation from '../components/main/Navigation';
import ClassCard from '../components/Home/ClassCard';

const Layout = () => {
    return (
    <React.Fragment>
        <Header />
        <div class="flex box">
            <div class="w-72 navbar shadow-lg" ><Navigation /></div>
            <div> <ClassCard /> </div>
        </div>
    </React.Fragment>
    );
};
export default Layout;