import React, { useState ,useEffect } from 'react';
// import { getAllClass } from '../../services/actions/api_class'
import '../../index.css'

const TodoBox = (props) => {

    console.log('todo',props.data)
    const list = props.data.map((item) => 
    <div className="flex space-x-3 py-3">
    <div className="flex-none rounded-full bg-green bg-opacity-10 h-9 w-9">

    </div>
    <div className="flex-auto overflow-hidden self-center">
            <p className="truncate text-sm">{item.assignment_name}</p>
    </div>
    <div className="flex-none self-center">
        <span className="text-green">{item.assignment_end_date}</span>
    </div>
</div>

    )

    return list
    };
    export default TodoBox;