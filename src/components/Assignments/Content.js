import React, { useState ,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import '../../index.css'
import Comments from './Comments';
import { assignmentGet } from '../../services/actions/api_class';

const Content = () => {
    const { classid } = useParams();
    const { id } = useParams();

    const [content, setContent] = useState([])
    const [inputs, setInputs] = useState({
        class_code: classid,
        assignment_id: id
    })

    useEffect( async () => {
        const res = await assignmentGet(inputs);
        console.log('asm content',res.data.data)

        if(res.data.result = 'OK'){
            setContent(res.data.data)
        }else{
            setContent([])
        }
    }, []);

    const card = content.map((item) => 
    <div className="">
    <div className="box post p-5 ">
        <div className="flex justify-between ">
            <div className="flex flex-wrap content-center py-2">
                <img src={'http://127.0.0.1:8080/public/img/1638125882758-Asset 5@1.png'} className="rounded-full bg-green bg-opacity-10 h-14 w-14 mr-3 object-cover rounded-full">
                </img>
                
                <div className="self-center">
                    <h4 className="text-green">
                        <label className="">{item.assignment_name}</label> 
                        </h4>
                    <span className="text-grey color-grey">{item.assignment_start_date}</span>
                </div>
            </div>

            <div className="text-black">
                <b>{item.score} pts.</b>
            </div>
        </div>
            <div className="self-center border-t border-grey">
                <p className="break-words whitespace-pre-line py-3">{item.assignment_description}</p>
            </div>
    </div>

    <div className="box post p-5">

        <Comments data={item.comment} />

        <div class=" bottom-0 p-2 ">
            <div className='flex space-x-2 '>
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


return (
    card
)
};
export default Content;