import React, { useState, useEffect, useCallback } from 'react';
import {Link, useParams} from 'react-router-dom'
import { ButtonGroup } from './ButtonGroup';
import { TFgroup } from './TFgroup';

function QuizSubj({index,item,onClick}){
    const [selected, setSelected] = useState("first");
    const [quizObj, setQuiz] = useState({
        question: '',
        type: '',
        image: '',
        score: ''
    })

    const handleChange = (e) => {
        const obj={...quizObj}
        obj[e.target.id]=e.target.value
        setQuiz(obj)

    }

    const onTapped = () => {
        item.question = quizObj.question
        onClick(item,index)
    }


    return(
        <div className="box shadow-lg p-7">
            
            <h4>Questions {index+1} :</h4>
            <div className="flex ">

            <textarea className="min-w-full	 input-questions text-lg" 
            placeholder="คำถาม..."
            id="question"
            onChange={handleChange}
            >
            
            </textarea>
            <button className="btn" onClick={onTapped}>submit</button>
            </div>
        </div>
    )
}
export default QuizSubj;