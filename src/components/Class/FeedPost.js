import React, { useState ,useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'
import { jwtAuth } from '../../services/actions/api_auth';
import { assignmentComment } from '../../services/actions/api_class';
import { postComment } from '../../services/actions/api_class';
import '../../index.css'

const FeedPost = (props) => {
    const { classid } = useParams();
    const [id, setId] = useState('');
    const [content, setContent] = useState([])
    const [comment, setComment] = useState({
        class_code: classid,
        id: '',
        data: {
            content: ''
        }
    })
  
    useEffect( async () => {
      const res = await jwtAuth();
        if (res.auth){
            setContent(res.data[0])
            console.log('data0',res.data[0])
        }else{
            // window.location.reload()
        }  
    }, []);

    const handleChange = (e) => {
        const data={...comment}
        data[e.target.name]=e.target.value
        setComment(data)
        }

    const onTappedComment = async (e) => {
        e.preventDefault();
        const targetArr = e.target.id.split(',')
        const id = targetArr[1]
        const type = targetArr[0]

        console.log('e.target.id',e.target.id)

        console.log('check',type)

        if (type==='post'){
            const res = await postComment({
                class_code: classid,
                id: id,
                data: {
                    content: comment.content
                }})
                if (res.data.result == 'OK'){
                    window.location.reload();
                    console.log('comment',comment)
                }else{
                    console.log('comment error',res.data.result)
                }    
        }else{
            const res = await assignmentComment({
                class_code: classid,
                id: id,
                data: {
                    content: comment.content
                }})
                if (res.data.result == 'OK'){
                    window.location.reload();
                    console.log('comment',comment)
                }else{
                    console.log('comment error',res.data.result)
                }    
        }

    }


    const card = props.data.map((item,post) => 
        <div className="" key={post}>
            {console.log('eiei',item)}
                    {/* {    console.log('item data',item.data.post_author[0].firstname)} */}
                    {/* <form onSubmit={() => setId(item.data.id),onTappedComment}> */}
                    <form onSubmit={onTappedComment} id={[item.type,item.data.id]}>

        <div className="box post p-5 "
        // name="assignment_id"
        // value={item.data.id}
        >
            <Link to={`/${classid}/${item.type}/${item.data.id}`}>
            <div className="flex flex-wrap content-center py-2"
            
            >
                <img src={item.data.profile_pic ?? 'http://127.0.0.1:8080/public/img/1638125882758-Asset 5@1.png'} className="rounded-full bg-green bg-opacity-10 h-14 w-14 mr-3 object-cover rounded-full">
                </img>
                
                <div className="self-center">
                    <h4 className="text-green">
                        {
                            item.type === 'post' ? item.data.post_author[0].firstname+' '+item.data.post_author[0].lastname : ('New assignment : ') 
                        }

                        {/* {item.data.post_author[0].firstname ?? ('New assignment : ')} */}
                        <label className="text-black">{item.data.assignment_name ?? ''}</label> 
                        </h4>
                    <span className="text-grey color-grey">{item.data.created ?? (item.data.assignment_start_date)}</span>
                </div>
            </div>
            </Link>
            

            <div className="self-center ">
                <p className="break-words whitespace-pre-line py-3">{item.data.post_content ?? ''}</p>
            </div>


                        {/* comment */}

            <div class=" bottom-0 p-2 border-t border-grey">

            <div className='flex space-x-2 '>
                {
                    item.data.comment > 0 ? <button className='flex-none rounded-full bg-grey bg-opacity-10 h-11 w-11'>{item.data.comment}</button>
                    : ''
                }
             <img src={content.profile_pic  ?? 'http://127.0.0.1:8080/public/img/1638125882758-Asset 5@1.png'} 
                 className='flex-none rounded-full bg-grey bg-opacity-10 h-11 w-11' />

                    <input 
                    type="" 
                    className="flex-auto tf w-full focus:outline-none focus:ring-2 focus:ring-grey" 
                    placeholder="comments..."
                    name="content"
                    onChange={handleChange}
                    />
                <button className='flex-none rounded-full bg-grey bg-opacity-10 h-11 w-11'></button>
                </div>
            </div>

            </div>
            </form>

        
    </div>
    )

        return card
  
    };
    export default FeedPost;