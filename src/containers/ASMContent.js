import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { getfromClass } from '../services/actions/api_class';
import ClassASM from '../components/Class/ClassASM';

function ASMContent(){

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


    const ASMlist = content.map((item) =>
      <ClassASM data={item.class_assignment} />
    )

    return(
      <React.Fragment>
          <div className="">
            {ASMlist}
        </div>
  </React.Fragment>
)
}

export default ASMContent;