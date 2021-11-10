import React from 'react';
import '../index.css';
import Header from '../components/main/Header';
import ClassCard from '../components/Home/ClassCard';

function Homepage(){
    return(
        <div>
            <Header />
            <ClassCard />
            <h1>Welcome to our website</h1>
        </div>
    );
}

export default Homepage;