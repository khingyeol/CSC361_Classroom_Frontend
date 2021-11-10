import React, { useState } from 'react';
import { login } from '../../services/actions/api_auth'
import '../../index.css'

const AuthCard = () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const onTappedLogin = async (e) => {
        e.preventDefault();
        const res = await login(inputs);
        if(res.auth){
            console.log(res.data);
        }
        else {
            console.log(res.data);
        }
    };

return (
    <div>
        <div className="authbox box shadow-lg align-bottom">
            <div className="eiei">
                <form onSubmit={onTappedLogin}>
                <h1 className="">Loginsdfsdsssssssssssssssssssssssssss</h1>
                <input 
                type="text" 
                className="tf" 
                placeholder="Username" 
                name="username"
                value={inputs.username || ""} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                className="tf" 
                placeholder="Password"
                name="password"
                value={inputs.password || ""} 
                onChange={handleChange}
                />
                <input type="submit" className="btn"></input>
                </form>
            </div>
        </div>
    </div>
    );
};
export default AuthCard;