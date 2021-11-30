import React, { useState } from 'react';
import { register } from '../../services/actions/api_auth';
import '../../index.css'

const RegisCard = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        name: {
            firstname: '',
            lastname: ''
        },
        optional_contact: '',
        profile_pic: ''
    })

    const handleChange = (e) => {
        const data = {...inputs}
        data[e.target.name]=e.target.value
        setInputs(data)
      }

    const onTappedSubmit = async (e) => {
        e.preventDefault();
        const res = await register(
            {username:inputs.username,
            email:inputs.email,
            password: inputs.password,
            name: {
                firstname: inputs.firstname,
                lastname: inputs.lastname
            },
            optional_contact: inputs.optional_contact,
            profile_pic: '61a4cb8ecbdaf9c5449507f3'
        })
        console.log('input regis',inputs)
        
        if (res){
            console.log(res)
            window.location.reload();
        }else{
            console.log(res)
        }

    }

return (
    <div className="">
        <form onSubmit={onTappedSubmit}>


        <h1 className="">Register</h1>

        <div className="relative w-full mb-5 leading-10">
            <span className=" text-grey">Username</span>
            <input 
            type="text" 
            className="tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
            placeholder="" 
            name="username"
            value={inputs.username || ""} 
            onChange={handleChange}
            />

            <div className='flex space-x-4'>
                <span className="flex-1 text-grey">Firstname</span>
                <span className="flex-1 text-grey">Lastname</span>
            </div>

            <div className='flex space-x-4'>
                <input 
                type="text" 
                className="tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
                placeholder="" 
                name="firstname"
                // value={inputs.firstname || ""} 
                onChange={handleChange}
                />

                <input 
                type="text" 
                className="tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
                placeholder="" 
                name="lastname"
                // value={inputs.lastname || ""} 
                onChange={handleChange}
                />
             </div>

             <div className='flex space-x-4'>
                <span className="flex-1 text-grey">Password</span>
                <span className="flex-1 text-grey">Confirm Password</span>
            </div>

            <div className='flex space-x-4'>
                <input 
                type="password" 
                className="tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
                placeholder="" 
                name="password"
                value={inputs.password || ""} 
                onChange={handleChange}
                />

                <input 
                type="password" 
                className="tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
                placeholder="" 
                name=""
                onChange={handleChange}
                />
             </div>
            


            <span className='text-grey'>E-mail</span>
            <input 
            type="email" 
            className="tf block w-full focus:outline-none focus:ring-2 focus:ring-green" 
            placeholder=""
            name="email"
            value={inputs.email || ""} 
            onChange={handleChange}
            />

            <span className='text-grey'>Contact (Optional)</span>
            <input 
            type="optional_contact" 
            className="tf block w-full focus:outline-none focus:ring-2 focus:ring-green" 
            placeholder=""
            name="optional_contact"
            value={inputs.optional_contact || ""} 
            onChange={handleChange}
            />
        </div>
        
        <div className='flex items-center'>
        <input type="submit" value="submit" className="btn w-1/2" />
        </div>
        </form>
    </div>
    );
};
export default RegisCard;