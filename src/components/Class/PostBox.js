import React, { useState ,useEffect } from 'react';
// import { getAllClass } from '../../services/actions/api_class'
import '../../index.css'
import { postPublish } from '../../services/actions/api_class';
import {useParams} from 'react-router-dom'

const PostBox = () => {
    const { classid } = useParams();
    const [inputs, setInputs] = useState({
                class_code: classid,
        data: {
            type: "normal",
            post_content: '',
            post_optional_file: []
        }
    })

    const handleChange = (e) => {
        const data={...inputs}
        data[e.target.id]=e.target.value
        setInputs(data)
        }

    const onTappedSubmit = async (e) => {
        e.preventDefault();
        const res = await postPublish(
            {class_code: classid, 
                data:{
                    type:'normal',
                    post_content:inputs.post_content,
                    post_optional_file: []}
                })
        console.log('input submit',inputs)
        if(res.data.result == 'OK'){
            window.location.reload();
            console.log('result',res.data.result)
        }else{
            console.log(res.data.result)
        }
    }


    return (
        <div className="box post p-5">
            <div className="">
            <form onSubmit={onTappedSubmit}>
                <div className="flex ">
                <img src="https://pbs.twimg.com/profile_images/1457911893780172803/R57Rv07H_400x400.jpg"
        className='h-14 w-14 object-cover rounded-full mr-4' />
                    <div className="w-full ">
                            <input className="justify-self-stretch h-full w-full" 
                                    type="normal"
                                    id="post_content"
                                    placeholder="say something..."
                                    onChange={handleChange}
                            />
                    </div>

                    <button className="bg-green rounded-2xl"
                     >send</button>
                </div>
                </form>

            </div>
        </div>
        );
    };
    export default PostBox;