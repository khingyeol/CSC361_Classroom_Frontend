import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { getTodo } from '../services/actions/api_class';
import ClassASM from '../components/Class/ClassASM';

function ASMContent(){

  const { classid } = useParams();
  const [content, setContent] = useState([])

  useEffect( async () => {
    const reqBody = {
      class_code: classid
    }
    const res = await getTodo(reqBody);

    if(res.data.result == 'OK'){
      setContent(res.data.data)
      console.log('asm',res.data.data)
    }else{
      setContent([])
    }
  }, []);



    return(
      <React.Fragment>
          <div className="">
          <ClassASM data={content} />
        </div>
  </React.Fragment>
)
}

export default ASMContent;