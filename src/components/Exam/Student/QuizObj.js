import React, { useState, useEffect, useCallback } from 'react';
import {Link, useParams} from 'react-router-dom'
import { TFgroup } from './TFgroup';

function QuizObj({question,index,ch1,ch2,ch3,ch4,answerarr}){
    const { classid } = useParams();
    const { id } = useParams();

    const [selected, setSelected] = useState("first");
    const [valueinp, setValue] = useState({});

    const [quizObj, setQuiz] = useState({
        answer: []
    })

    const handleChange = (e) => {
        const obj={...quizObj}
        // obj[e.target.name]=selected
        setQuiz(obj)
        // const num = index
        // const value = selected

        // setValue(values => ({...values, [num]: [value]}))
        // setValue([selected])
        // setValue(selected)
        console.log(selected)
    }
    

    return(
        <div className="box shadow-lg p-7 ">
            
            <h4>Questions : {index+1}</h4>

        <div className="flex ">
        <div className="	min-w-full input-questions text-lg" 
            placeholder="คำถาม..."
            id="question"
            > {question}
            </div>  

        </div>
            
            <div className="mt-4 space-x-3 ">

            <TFgroup 
            index="0"
            selected={selected}
            text={ch1}
             id="1"
            //  onChange=""
            onClick={setSelected}
            // onUpdate={handleChange()}
            value="ee"                       
            />

            <TFgroup 
            index="1"
             selected={selected}
             text={ch2}
             id="2"
             value="ss"
             name="answer"
             onClick={setSelected}
             />
            <TFgroup 
            // value="2"
            index="2"

             selected={selected}
             text={ch3}
             id=""
             onClick={setSelected}
             />
            <TFgroup 
            index="3"
            // value="3"
             selected={selected}
             text={ch4}
             id=""
             onClick={setSelected}
            //  onChange={type}

             />

            </div>
        </div>
    )
}
export default QuizObj;