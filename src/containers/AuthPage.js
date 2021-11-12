import AuthCard from "../components/Auth/AuthCard";
import Header from "../components/main/Header";
import React from 'react';
import '../index.css'

function AuthPage(){
    return(
        <div>
            <Header />
            <div className='grid grid-cols-4 '>
                <div className='col-span-2'></div>
                <div className='col-span-2'>
                    <AuthCard />
                </div>
                
            </div>

        </div>
    );
}

export default AuthPage;