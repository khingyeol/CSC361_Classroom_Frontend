import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Examlist from './Examlist';
import { getfromClass } from '../../services/actions/api_class';

function ExamContent(){

  const { classid } = useParams();
  const [content, setContent] = useState([])

  useEffect( async () => {
    const res = await getfromClass(classid);

    if(res.data.result == 'OK'){
      setContent(res.data.data)
      console.log('asm',res.data.data)
    }else{
      setContent([])
    }
  }, []);


    // const ASMlist = content.map((item) =>
    //   <ClassASM data={item.class_assignment} />
    // )

    return(
      <React.Fragment>
          <div className="">
            {/* {ASMlist} */}
            eiei
        </div>
  </React.Fragment>
)
}

export default ExamContent;