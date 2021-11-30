import AuthCard from "../components/Auth/AuthCard";
import RegisCard from "../components/Auth/RegisCard";
import Header from "../components/Auth/Header";
import React, { useState } from 'react';
import '../index.css'
import { toRegister } from '../components/Auth/AuthCard'
import { Outlet, Routes } from "react-router";

function AuthPage(){
    
    const [component, setComponent] = useState('login')

    return(
        <div>
            <Header />
            <div className='grid xl:grid-cols-4 w-auto sm:grid-cols-1'>
                <div className='col-span-2 '>
                <div className='grid justify-items-center'>
                    <div className='py-14 authbox box shadow-lg flex content-center item-center justify-center h-full'>
                        <div className='w-full px-8'>
                            <div className='relative flex flex-col'>
                            {
                                component === 'login' ? <AuthCard /> : <RegisCard />
                            }
                            
                            <button 
                            className='flex-auto text-right pr-10 text-grey underline'
                            onClick={() => setComponent(component === 'login' ? 'register' : 'login')}
                            >{component === 'login' ? 'Register' : 'back to Login'}
                            </button>
                        </div>
                        
                        </div>
                        

                        

                        
                        </div>
                        </div>
                </div>
                
            </div>

        </div>
    );
}


export default AuthPage;
