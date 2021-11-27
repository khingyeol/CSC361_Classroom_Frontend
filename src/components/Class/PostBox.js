import React, { useState ,useEffect } from 'react';
// import { getAllClass } from '../../services/actions/api_class'
import '../../index.css'

const PostBox = () => {

    return (
        <div className="box post p-5">
            <div className="">
                <div className="flex">
                <img src="https://pbs.twimg.com/profile_images/1457911893780172803/R57Rv07H_400x400.jpg"
        className='h-14 w-14 object-cover rounded-full' />
                    <div className="ee">
                        <input className="justify-self-stretch"></input>
                    </div>
                </div>
            </div>
        </div>
        );
    };
    export default PostBox;