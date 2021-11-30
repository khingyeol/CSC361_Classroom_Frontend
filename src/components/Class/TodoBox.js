import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom'
// import { getAllClass } from '../../services/actions/api_class'
import '../../index.css'
import {useParams} from 'react-router-dom'


const TodoBox = (props) => {
    const { classid } = useParams();

    console.log('todo',props.data)
    const list = props.data.map((item) => 
    <Link to={`/${classid}/assignment/${item.id}`}>
    <div className="flex space-x-3 py-3">
    <div className="flex-none rounded-full bg-green bg-opacity-10 h-9 w-9">
    <img src='http://127.0.0.1:8080/public/img/1638125882758-Asset 5@1.png' 
    className="rounded-full bg-green bg-opacity-10 mr-3 object-cover rounded-full">
                </img>

    </div>
    <div className="flex-auto overflow-hidden self-center">
            <p className="truncate text-sm">{item.assignment_name}</p>
    </div>
    <div className="flex-none self-center">
        <span className="text-green">{item.assignment_end_date}</span>
    </div>
</div>
     </Link>

    )

    return list
    };
    export default TodoBox;