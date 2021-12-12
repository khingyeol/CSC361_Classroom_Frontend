import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Examlist from './Examlist';
import { getAllExam } from '../../services/actions/api_exam';

function ExamContent(){

  const { classid } = useParams();
  const [content, setContent] = useState([])

  useEffect( async () => {
    const reqBody = {
        class_code: classid
    }
    const res = await getAllExam(reqBody)
    if(res.data.result == 'OK'){
      setContent(res.data.data)
      
    }else{
      setContent([])
    }
  }, []);

    return(
      <React.Fragment>
          <div className="">
          <Examlist data={content} />
        </div>
  </React.Fragment>
)
}

export default ExamContent;