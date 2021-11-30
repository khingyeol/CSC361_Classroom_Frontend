import React, { useState ,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import '../../index.css'

const PostComments = (props) => {
    const { classid } = useParams();
    const { id } = useParams();

    const card = props.data.map((item) => 
    <div class="flex space-x-2 py-3 border-b border-grey">
    <img src={item.profile_pic} 
    className="flex-none rounded-full bg-green bg-opacity-10 h-14 w-14 mr-3 object-cover rounded-full"></img>
    <div className="flex-auto space-x-2">
        <label className="text-lg">{item.comment_author.firstname+' '+item.comment_author.lastname}</label>
        <label className="text-grey ">{item.create}</label>
        <div className="">
            {item.content}
        </div>
    </div>
</div>

    )

return (
    card
);

};
export default PostComments;