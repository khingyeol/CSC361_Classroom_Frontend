import React, { useState, useEffect, useCallback } from 'react';
import {Link, useParams} from 'react-router-dom'
import { ButtonGroup } from './ButtonGroup';
import { TFgroup } from './TFgroup';
import { examStdSubmit } from '../../services/actions/api_exam';

function QuizObj({index,item,onClick}){
    const [selected, setSelected] = useState("first");
    const [valueinp, setValue] = useState([]);

    const [quizObj, setQuiz] = useState({
        question: '',
        type: '',
        image: '',
        choice: [],
        answer: [],
        score: '',
        id: ''
    })
    const handleChange = (e) => {
        const obj={...quizObj}
        obj[e.target.id]=e.target.index
        setQuiz(obj)
    }
    
    const type = (e) => {
        // const index = e.target.index
        // const typing = e.target.value
        // // setValue(values => ({...values, [index]: typing}))
        // setValue(typing)
        console.log('type')

        // value[e.target.value] = e.target.text
        // setValue(value)
    }

    const onTapped = () => {
        item.question = quizObj.question
        item.answer = [selected] 
        console.log('checkcheck',quizObj)
        // item.choice[obj.] =   
        console.log('value',valueinp)
        onClick(item,index)
    }

    return(
        <div className="box shadow-lg p-7">
            
            <h4>Questions {index+1}:</h4>

        <div className="flex ">
        <textarea className="	min-w-full input-questions text-lg" 
            placeholder="คำถาม..."
            id="question"
            onChange={handleChange}                                        
            >
            </textarea>  
            <button className="btn" onClick={onTapped}>submit</button>

        </div>
            
            <div className="mt-4 space-x-3">

            <TFgroup 
            index="0"
             selected={selected}
            //  text="1"
             id=""
            //  onChange=""
            onClick={setSelected}
            // value="ee"                       
            />

            <TFgroup 
            index="1"
             selected={selected}
            //  text="2"
             id=""
            //  value="กก"
             value="ss"
             onClick={setSelected}
             />
            <TFgroup 
            // value="2"
            index="2"

             selected={selected}
            //  text="3"
             id=""
             onClick={setSelected}
             />
            <TFgroup 
            index="3"
            // value="3"
             selected={selected}
            //  text="4"
             id=""
             onClick={setSelected}
            //  onChange={type}

             />

            </div>
        </div>
    )
}
export default QuizObj;