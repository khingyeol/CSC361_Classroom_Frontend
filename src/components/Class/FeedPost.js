import React, { useState ,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import '../../index.css'



const FeedPost = (props) => {


    console.log('FeedPost',props.data)

    const card = props.data.map((item,post) => 

        <div className="" key={post}>
        <div className="box post p-5 ">
            <div className="flex flex-wrap content-center py-2">
                <img src={item.id} className="rounded-full bg-green bg-opacity-10 h-14 w-14 mr-3 object-cover rounded-full">
                </img>
                
                <div className="self-center">
                    <h4 className="text-green">{item.data.type ?? ('New assignment : ')}<label className="text-black">{item.data.assignment_name ?? ''}</label> </h4>
                    <span className="text-grey color-grey">{item.data.created ?? (item.data.assignment_start_date)}</span>
                </div>
            </div>
            

            <div className="self-center ">
                <p className="break-words whitespace-pre-line py-3">{item.data.post_content ?? ''}</p>
            </div>

            <div class=" bottom-0 p-2 border-t border-grey">

    <div className='flex space-x-2 '>
    <button className='flex-none rounded-full bg-grey bg-opacity-10 h-11 w-11'>{item.data.comment}</button>
    <button className='flex-none rounded-full bg-grey bg-opacity-10 h-11 w-11'></button>

        <input 
                    type="" 
                    className="flex-auto tf  w-full focus:outline-none focus:ring-2 focus:ring-grey" 
                    placeholder="comments..."
                    name=""
                    value="" 
                    onChange=""
                    />
        <button className='flex-none rounded-full bg-grey bg-opacity-10 h-11 w-11'></button>

        </div>
    </div>
            </div>

        
    </div>
    )

        return card
  
    };
    export default FeedPost;