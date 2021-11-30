import React, { useState, useEffect, useCallback } from 'react';
import '../index.css';
import {Link, useParams} from 'react-router-dom'
import { ButtonGroup } from '../components/Exam/ButtonGroup';
import CreateContent from '../components/Exam/CreateContent';



function ExamCreate(){

    const handleClick = useCallback(() => {
        const eiei = ''
        console.log('CALL BACK',eiei)
        
      }, []);

    return (
    <React.Fragment>

      <div className="container box py-12 px-6 mx-auto" id="">
        <CreateContent onClick={handleClick} />
      </div>


    </React.Fragment>

    )
}
export default ExamCreate;