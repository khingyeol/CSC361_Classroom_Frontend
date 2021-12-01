import React, { useState ,useEffect } from 'react';
import { useParams, Link} from 'react-router-dom'
import { assignmentAllClass } from '../../services/actions/api_class';
import { jwtAuth } from '../../services/actions/api_auth';

import '../../index.css'

const AsmCard = () => {
    const [content, setContent] = useState([])
    // console.log(req.userId)
    useEffect( async () => {
      const res = await jwtAuth();     
      console.log('eee',res.data)   
      const resASM = await assignmentAllClass(res.data);
        if (resASM.data.result == 'OK'){
            console.log('dddd',resASM)
            setContent(resASM.data.data)
        }else{
            console.log('AsmCard get noti',resASM.data.result)
        }
  
    }, []);

    const card = content.map((item) =>
    // <Link to={`/aa/assignment/${item.id}`}>
    <div className="container4">
    <div className="box asm justify-between flex-wrap content-center">
        <div className="flex flex-wrap content-center">
            <div className="rounded-full bg-green bg-opacity-10 h-14 w-14">

            </div>
            <div className="self-center">
            <h4>{item.assignment_name}</h4>
                <span className="text-grey color-grey">{item.class_name}</span>
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
// </Link>
)
  
    return (
        card
        );
    };
    export default AsmCard;