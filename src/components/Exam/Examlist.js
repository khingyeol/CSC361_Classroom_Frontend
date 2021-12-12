import React, { useState ,useEffect } from 'react';
// import { getAllClass } from '../../services/actions/api_class'
import '../../index.css'
import { useParams, Link} from 'react-router-dom'

const Examlist = (props) => {
    const { classid } = useParams();

    const card = props.data.map((item,post) => 

    <Link to={`/${classid}/exam/${item.id}`}>
    <div className="container4" key={post}>

    <div className="box asm justify-between flex-wrap content-center">
        <div className="flex flex-wrap content-center">
            <div className="rounded-full bg-green bg-opacity-10 h-14 w-14">

            </div>
            <div className="self-center">
                <h4>{item.exam_name}</h4>
                <span className="text-grey color-grey">{item.exam_start_date}</span>
            </div>
        </div>
        <div className="self-center">
        </div>

        <div className="self-center">
            <b>{item.exam_end_date}</b>
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
    export default Examlist;