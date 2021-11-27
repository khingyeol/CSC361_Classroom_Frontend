import React, { useState ,useEffect } from 'react';
// import { getAllClass } from '../../services/actions/api_class'
import '../../index.css'

const FeedPost = () => {

    return (
        <div className="container4">
            <div className="box post p-5 ">
                <div className="flex flex-wrap content-center py-2">
                    <div className="rounded-full bg-green bg-opacity-10 h-14 w-14 mr-3">

                    </div>
                    <div className="self-center">
                        <h4 className="text-green">Ajarn Martin</h4>
                        <span className="text-grey color-grey">21 Jun. 2020</span>
                    </div>
                </div>
                

                <div className="self-center ">
                    <p className="break-words whitespace-pre-line py-3">Dear students,

As we didn’t have a chance to say goodbye,
I would like to send you some words through this virtual classroom.

Thai and Asian wisdom might not be directly related to your major.
Yet, somehow, just like the idea of the World Wide Web, it may refer to the way human thinks as mind mapping. By your understanding toward human’s thought, it may lead you somewhere. Hope the knowledge from this course will be useful to you at some points.</p>
                </div>

                <div class=" bottom-0 p-2 border-t border-grey">
      <div className='flex space-x-2 '>
      <button className='flex-grow rounded-full bg-grey bg-opacity-10 h-11 w-11'></button>
      <button className='flex-grow rounded-full bg-grey bg-opacity-10 h-11 w-11'></button>

        <input 
                    type="" 
                    className="flex-shrink tf  w-full focus:outline-none focus:ring-2 focus:ring-grey" 
                    placeholder="comments..."
                    name=""
                    value="" 
                    onChange=""
                    />
        <button className='flex-grow rounded-full bg-grey bg-opacity-10 h-11 w-11'></button>

        </div>
      </div>
                </div>
 
            
        </div>
        );
    };
    export default FeedPost;