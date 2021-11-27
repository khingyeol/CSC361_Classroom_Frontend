import AuthCard from "../components/Auth/AuthCard";
import RegisCard from "../components/Auth/RegisCard";
import Header from "../components/Auth/Header";
import React from 'react';
import '../index.css'
import { toRegister } from '../components/Auth/AuthCard'

function AuthPage(){
    return(
        <div>
            <Header />
            <div className='grid xl:grid-cols-4 w-auto sm:grid-cols-1'>
                <div className='col-span-2 '></div>
                <div className='grid justify-items-center'>
                    <AuthCard />
                </div>
                
            </div>

        </div>
    );
}


export default AuthPage;
