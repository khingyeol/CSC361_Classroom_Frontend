import React, { useState ,useEffect } from 'react';
import '../../index.css'
import { useParams, Link} from 'react-router-dom'

const ClassASM = (props) => {
    const { classid } = useParams();
    const card = props.data.map((item,post) => 

    <Link to={`/${classid}/assignment/${item.id}`}>        
        {console.log('check props',props)}
        {console.log('check item',item)}
    <div className="container4" key={post}>
    <div className="box asm justify-between flex-wrap content-center">
        <div className="flex flex-wrap content-center">
            <div className="rounded-full bg-green bg-opacity-10 h-14 w-14">

            </div>
            <div className="self-center">
                <h4>{item.assignment_name}</h4>
                <span className="text-grey color-grey">{item.assignment_start_date.split('T')[0]}</span>
            </div>
        </div>
        <div className="self-center">
        </div>

        <div className="self-center">
            <b>{item.assignment_end_date}</b>
        </div>
        <div className="self-center">
            {item.status}
        </div>
    </div>
        </div>
</Link>
    )

    return(
        card
    )
    
    };
    export default ClassASM;