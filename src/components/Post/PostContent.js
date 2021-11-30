import React, { useState ,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import '../../index.css'
import PostComments from './PostComment';
import { postGet } from '../../services/actions/api_class';

const PostContent = () => {
    const { classid } = useParams();
    const { id } = useParams();

    const [content, setContent] = useState([])
    const [inputs, setInputs] = useState({
        class_code: classid,
        post_id: id
    })

    useEffect( async () => {
        const res = await postGet(inputs);
        console.log('post',res.data.data)

        if(res.data.result = 'OK'){
            setContent(res.data.data)
        }else{
            setContent([])
        }
    }, []);

    const card = content.map((item) =>
    <div className="">
            {console.log('post content',item)}
    <div className="box post p-5 ">
        <div className="flex justify-between ">
            <div className="flex flex-wrap content-center py-2">
                <img src={item.profile_pic} className="rounded-full bg-green bg-opacity-10 h-14 w-14 mr-3 object-cover rounded-full">
                </img>
                
                <div className="self-center">
                    <h4 className="text-green">
                        <label className="">{item.post_author.firstname+' '+item.post_author.lastname}</label> 
                        </h4>
                    <span className="text-grey color-grey">{item.created}</span>
                </div>
            </div>

        </div>
            <div className="self-center border-t border-grey">
                <p className="break-words whitespace-pre-line py-3">{item.post_content}</p>
            </div>
    </div>

    <div className="box post p-5">

        <PostComments data={item.comment} />

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
export default PostContent;