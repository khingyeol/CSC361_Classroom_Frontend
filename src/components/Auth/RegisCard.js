import React, { useState } from 'react';
import { login } from '../../services/actions/api_auth'
import '../../index.css'

const RegisCard = () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const onTappedLogin = async (e) => {
        e.preventDefault();
        const res = await login(inputs);
        if(res.auth){ //res.auth ว่ามี tokenมั้ย
            console.log(res.data);
        }
        else {
            console.log(res.data);
        }
    };

    if (localStorage.getItem('token')){ 
        // <Navigate to='/home' />
    }
    
return (
        <div className="py-28 authbox box shadow-lg flex content-center item-center justify-center h-full">
            <div className='w-full px-8'>
            <div className="relative flex flex-col ">
                <form onSubmit={onTappedLogin}>


                <h1 className="">Register</h1>

                <div className="relative w-full my-8 leading-10">
                    <span className=" text-grey">Username</span>
                    
                    <input 
                    type="text" 
                    className="tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
                    placeholder="" 
                    name="username"
                    value={inputs.username || ""} 
                    onChange={handleChange}
                    />

                    <span className='text-grey'>Password</span>
                    
                    <input 
                    type="text" 
                    className="tf block w-full focus:outline-none focus:ring-2 focus:ring-green" 
                    placeholder=""
                    name="password"
                    value={inputs.password || ""} 
                    onChange={handleChange}
                    />
                </div>
                
                <div className='flex items-center'>
                <input type="submit" value="submit" className="btn w-1/2" />
                <span className='flex-auto text-right pr-10 text-grey underline'>Register</span>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
};
export default RegisCard;