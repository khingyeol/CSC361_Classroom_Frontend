import React, { useState, useEffect, useCallback } from 'react';
import {Link, useParams} from 'react-router-dom'
import { ButtonGroup } from './ButtonGroup';
import { TFgroup } from './TFgroup';

function QuizObj({index,item,onClick}){
    console.log('eeeeeeeeeeee',item)
    const [selected, setSelected] = useState("first");
    const [quizObj, setQuiz] = useState({
        question: '',
        type: '',
        image: '',
        choice: [],
        answer: [],
        score: ''
    })
    console.log('sec',selected)

    const handleChange = (e) => {
        const obj={...quizObj}
        obj[e.target.id]=e.target.value
        setQuiz(obj)
        console.log('select',selected)
        if (selected != "first"){
            item.question = quizObj.question
            item.answer = [selected]    
        }
        onClick(item,index)

    }

    const onTapped = () => {
    }

    return(
        <div className="box shadow-lg p-7">
            
            <h4>Questions {index+1}:</h4>

            <textarea className="min-w-full	 input-questions text-lg" 
            placeholder="คำถาม..."
            id="question"
            onChange={handleChange}                                        
            >
            </textarea>  
            
            <div className="mt-4 space-x-3">
            <TFgroup 
            value="0"
            selected={selected}
            text="ข้อเขียน"
            onChange={setSelected}                                        
            />
            <TFgroup 
            value="1"
             selected={selected}
             text="ข้อเขียน"
            onChange={setSelected}                            
            />
            <TFgroup 
            value="2"
             selected={selected}
             text="ข้อเขียน"
            onChange={setSelected}                            
            />
            <TFgroup 
            value="3"
             selected={selected}
             text="ข้อเขียน"
            onChange={setSelected}                            
            />

            </div>
        </div>
    )
}
export default QuizObj;